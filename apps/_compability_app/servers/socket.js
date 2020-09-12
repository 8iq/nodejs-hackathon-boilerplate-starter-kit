const server = require("http").createServer();

const io = require("socket.io");

server.listen(8000);

class SocketServer {
    constructor() {
        this.socket_server = io(server, {
            path: "/",
            serveClient: false,
            pingInterval: 10000,
            pingTimeout: 5000,
            cookie: false
        })
    }

    init() {
        this.socket_server.on("connection", (socket) => {
            console.log(socket.id, "a user connected");

            socket.on("chat message", (msg) => {
                console.log("message", socket.id, msg);
                io.emit("chat message", msg)
            });

            socket.on("disconnect", () => {
                console.log(socket.id, 'user disconnected')
            })
        })
    }

    socket_server = null;
}

function initSocketServer() {
    new SocketServer();
}

module.exports = {
    initSocketServer
};
