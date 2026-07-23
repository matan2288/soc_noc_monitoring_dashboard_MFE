import { WebSocketServer } from "ws";

const PORT = 8080;

// ponytail: stub server so `pnpm dev` has a target; real generator comes later
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (socket) => {
  socket.send(JSON.stringify({ type: "hello", at: Date.now() }));
});

console.log(`[mock-ws] listening on ws://localhost:${PORT}`);
