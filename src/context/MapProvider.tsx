import React, { createContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

interface SocketContextType {
  droneIds: string[];
  socket: Socket | null | undefined;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
  children: React.ReactNode;
  serverUrl: string;
}

export function SocketProvider({ children, serverUrl }: SocketProviderProps) {
  const [droneIds, setDronesIds] = useState<string[]>([]);

  const [socket, setSocket] = useState<Socket | null>();

  useEffect(() => {
    const newSocket = io(serverUrl);
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [serverUrl]);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected to server");
      });

      socket.on("hello", (uvaIds) => {
        setDronesIds(uvaIds);
      });

      socket.on("newUva", (uvaId) => {
        setDronesIds((prev) => {
          return [...prev, uvaId];
        });
      });
    }
  }, [droneIds, socket]);

  return (
    <SocketContext.Provider value={{ droneIds, socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketContext = (): SocketContextType => {
  const context = React.useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};
