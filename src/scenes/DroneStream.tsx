/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import VideoStreamer from "../components/VideoStreamer";

const DroneStream = () => {
  const { droneId } = useParams<{ droneId?: string }>();

  return (
    <div className="container h-screen grid place-items-center">
      {droneId && <VideoStreamer id={droneId[3]} />}
    </div>
  );
};

export default DroneStream;
