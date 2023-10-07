import { useSocketContext } from "@/context/MapProvider";
import VideoStreamer from "../components/VideoStreamer";

const MultiStream = () => {
  const { drones } = useSocketContext();
  return (
    <div className="h-screen p-4 overflow-hidden grid grid-cols-2 gap-2">
      {drones.slice(0, 4).map((drone) => (
        <VideoStreamer
          key={drone.id}
          id={drone.id.slice(3)}
          className="h-full w-full rounded-xl border border-gray-600"
        />
      ))}
      {/* Make sure that there is 4 screens */}
      {drones.length < 4 &&
        [...Array(4 - drones.length)].map((_, i) => (
          <div
            key={i}
            className="h-full w-full rounded-xl bg-black border border-gray-600"
          ></div>
        ))}
    </div>
  );
};

export default MultiStream;
