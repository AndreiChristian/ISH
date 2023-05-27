import { Server } from "socket.io";

let io: Server;

export const websocket = {
  init: (httpServer) => {
    io = new Server(httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
      },
    });
    return io;
  },

  getIO: () => {
    if (!io) {
      throw new Error("no initialized socket");
    }
    return io;
  },
};
