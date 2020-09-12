import socketIOClient from 'socket.io-client'

const CHAT_URL = process.env.chat_url || 'http://localhost:8000/';

export class ChatService {
    init() {
        return new Promise((res) => {
            this.socket = socketIOClient(CHAT_URL);
            this.socket.on('connect', () => {
                this.listen();
                res(this)
            });
        });
    }

    listen = () => {
        this.socket.on('chat message', (msg) => {
            for (const [,subscriber] of this.subscribers) {
                if (typeof subscriber === "function") {
                    subscriber(msg)
                }
            }
        })
    }

    send(message) {
        this.socket.emit("chat message", message);
    }

    subscribe(callback) {
        const callback_id = Math.random();

        this.subscribers.set(
            callback_id,
            callback
        );

        return callback_id
    }

    unsubscribe = (id) => {
        this.subscribers.delete(id);
    };

    subscribers = new Map();
    socket = null
}
