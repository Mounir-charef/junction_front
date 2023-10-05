import { FC, useEffect } from "react";
import { io } from "socket.io-client";

interface StreamingProps {
  droneId: string;
}

const Streaming: FC<StreamingProps> = ({ droneId }) => {
  useEffect(() => {
    const socket = io(`ws://13.38.173.241:3333/app/${droneId}`);
    socket.on("connect", () => {
      console.log("connected");
    });
    return () => {
      socket.disconnect();
    };
  }, [droneId]);

  return <div>videoPlayer</div>;
};

export default Streaming;
