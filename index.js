const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { pipeline } = require("stream/promises");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const data = path.join(__dirname, "data");
const uploads = path.join(data, "uploads");
fs.mkdirSync(uploads, { recursive: true });

let state = { text: "", files: [] };
try {
    state = JSON.parse(fs.readFileSync(path.join(data, "state.json")));
} catch {}

function update() {
    fs.writeFileSync(path.join(data, "state.json"), JSON.stringify(state));
    io.emit("state", state);
}

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.post("/upload", (req, res) => {
    const id = crypto.randomUUID();
    const name = path.basename(String(req.query.name || "file"));
    pipeline(req, fs.createWriteStream(path.join(uploads, id)))
        .then(() => {
            state.files.push({ id, name });
            update();
            res.end();
        })
        .catch(() => res.sendStatus(500));
});

app.get("/files/:id", (req, res) => {
    const file = state.files.find((f) => f.id === req.params.id);
    if (!file) return res.sendStatus(404);
    res.download(path.join(uploads, file.id), file.name);
});

io.on("connection", (socket) => {
    socket.emit("state", state);

    socket.on("text", (text) => {
        if (typeof text !== "string") return;
        state.text = text;
        update();
    });

    socket.on("delete", (id) => {
        const file = state.files.find((f) => f.id === id);
        if (!file) return;
        fs.rm(path.join(uploads, file.id), { force: true }, () => {});
        state.files = state.files.filter((f) => f !== file);
        update();
    });
});

server.listen(process.env.PORT || 3000, "0.0.0.0", () => console.log("Clippy is running"));