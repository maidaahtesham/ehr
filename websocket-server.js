const { createServer } = require("http");
const WebSocket = require("ws");

const server = createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("✅ Client connected");

  ws.on("message", (message) => {
    const msg = message.toString().toLowerCase(); // ✅ convert buffer to string
    console.log("📨 Received:", msg);

    let response = "🤖 I didn't understand that.";
    if (msg.includes("hello")) response = "Hi there! 👋";
    else if (msg.includes("appointment")) response = "You can book appointments in the Appointments section.";

    ws.send(`Bot: ${response}`);
  });

  ws.send("Bot: Welcome! Ask me anything...");
});

server.listen(3001, () => {
  console.log("🚀 WebSocket server running at ws://localhost:3001");
});
