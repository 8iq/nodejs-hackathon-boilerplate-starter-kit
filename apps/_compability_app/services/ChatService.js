import { injectable } from "inversify";
import socketIOClient from "socket.io-client";
import { Types, Services } from "./index";

const CHAT_URL = process.env.chat_url || 'http://localhost:8000/';

@injectable()
export class ChatService {
    init() {
        return new Promise((res) => {
            this.socket = socketIOClient(CHAT_URL);
            this.socket.on("connect", () => {
                this.listen();
                res()
            });
        });
    }

    listen = () => {
        this.socket.on("chat message", (msg) => {
            for (const [,subscriber] of this.subscribers) {
                if (typeof subscriber === "function") {
                    subscriber(msg)
                }
            }
        })
    };

    send(message) {
        const user = this.user_service.getCurrentUser();
        let generated_message = null;

        switch (typeof message) {
            case "string": {
                generated_message = {
                    user_id: user.getId(),
                    user_name: user.getName(),
                };
                break;
            }
            default:
                break;
        }

        if (generated_message) {
            this.socket.emit("chat message", message);
        }
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

    socket = null;
    subscribers = new Map();
    user_service = Services.get(Types.UserService)
}
