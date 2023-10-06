import React, { createContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { BASE_WS_URL } from "@/constants";
import { toast } from "sonner";

interface SocketContextType {
  droneIds: string[];
  socket: Socket | null | undefined;
  drones: Drone[];
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
  children: React.ReactNode;
}

interface updateProps {
  id: string;
  topic: string;
  data: string | number | boolean;
}

export function SocketProvider({ children }: SocketProviderProps) {
  const [droneIds, setDronesIds] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>();
  const [drones, setDrones] = useState<Drone[]>([]);

  const updateDrone = ({ id, topic, data }: updateProps) => {
    setDrones((prev) => {
      return prev.map((drone) => {
        if (drone.id === id) {
          return { ...drone, [topic]: data };
        }
        return drone;
      });
    });
  };

  const updateDroneGps = ({ id, topic, data }: updateProps) => {
    setDrones((prev) => {
      return prev.map((drone) => {
        if (drone.id === id) {
          return { ...drone, gps: { ...drone.gps, [topic]: data } };
        }
        return drone;
      });
    });
  };

  const updateDroneBat = ({ id, topic, data }: updateProps) => {
    setDrones((prev) => {
      return prev.map((drone) => {
        if (drone.id === id) {
          return { ...drone, bat: { ...drone.bat, [topic]: data } };
        }
        return drone;
      });
    });
  };

  useEffect(() => {
    const newSocket = io(BASE_WS_URL);
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        toast.success("Connected to ws server");
      });

      socket.on("disconnect", () => {
        toast("Disconnected from server");
        setDrones([]);
        setDronesIds([]);
      });

      socket.on("hello", (uvaIds: string[]) => {
        setDronesIds(uvaIds);
        setDrones(uvaIds.map((id) => ({ id })));
      });

      socket.on("newUva", (uvaId) => {
        setDronesIds((prev) => {
          return [...prev, uvaId];
        });
        setDrones((prev) => {
          return [...prev, { id: uvaId }];
        });
      });
      // TODO: Find a typescript solution for match case ex: python match case or regex
      droneIds.forEach((id) => {
        socket.on(
          id,
          ({
            topic,
            data,
          }: {
            topic: string;
            data: string | number | boolean;
          }) => {
            switch (topic) {
              case "state":
                updateDrone({ id, topic, data });
                break;
              case "armed":
                updateDrone({ id, topic, data });
                break;
              case "in_air":
                updateDrone({ id, topic, data });
                break;

              case "lat":
                updateDroneGps({ id, topic, data });
                break;
              case "lon":
                updateDroneGps({ id, topic, data });
                break;
              case "fx":
                updateDroneGps({ id, topic, data });
                break;
              case "ns":
                updateDroneGps({ id, topic, data });
                break;
              case "abs":
                updateDroneGps({ id, topic, data });
                break;

              case "batId":
                updateDroneBat({ id, topic, data });
                break;
              case "batVl":
                updateDroneBat({ id, topic, data });
                break;
              case "batPt":
                updateDroneBat({ id, topic, data });
                break;
            }
          }
        );
      });
    }
  }, [droneIds, socket]);

  return (
    <SocketContext.Provider value={{ droneIds, socket, drones }}>
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
