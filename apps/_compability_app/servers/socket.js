const server = require("http").createServer();

const io = require("socket.io")(server, {
    path: "/",
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

server.listen(8000);

function initSocketServer() {
    io.on("connection", (socket) => {
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

module.exports = {
    initSocketServer
};
