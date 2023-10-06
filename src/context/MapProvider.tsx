import React, { createContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

interface SocketContextType {
  drones: Drone[];
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
  children: React.ReactNode;
  serverUrl: string;
}

export function SocketProvider({ children, serverUrl }: SocketProviderProps) {
  const [drones, setDrones] = useState<Drone[]>([]);

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
        setDrones(uvaIds.map((id: string) => ({ id })));
      });

      socket.on("newUva", (uvaId) => {
        setDrones((prev) => {
          return [...prev, { id: uvaId }];
        });
      });

      socket.on("message", ({ topic, data, uvaId }) => {
        console.log(topic);
        switch (topic) {
          case "uav1/bat/id":
            setDrones((prev) => {
              return [...prev, { id: uvaId, bat: data }];
            });
            break;
        }
      });
    }
  }, [drones, socket]);

  return (
    <SocketContext.Provider value={{ drones }}>
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
