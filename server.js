const { createServer } = require("http");
const WebSocket = require("ws");

const server = createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message);
    ws.send(`Bot: You said "${message}"`);
  });

  ws.send("Bot: Hello! How can I help you?");
});

server.listen(3001, () => {
  console.log("WebSocket server running at ws://localhost:3001");
});
