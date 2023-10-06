import { useSocketContext } from "@/context/MapProvider";
import { cn } from "@/lib/utils";
import Drone from "@/icons/Drone";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { drones } = useSocketContext();
  console.log(drones);
  return (
    <div className="absolute px-1  flex flex-col items-center justify-start py-2 gap-4 inset-y-4 left-4 bg-secondary rounded-lg z-[10000]">
      {drones.map((drone) => (
        <Link to={drone.id}>
          <Drone
            key={drone.id}
            className={cn("cursor-pointer hover:opacity-75", {
              "text-cyan-700": drone.state === "1",
              "text-red-700": drone.state === "2",
              "text-blue-700": drone.state === "3",
              "text-green-700": drone.state === "4",
              "text-red-400": drone.state === "5",
            })}
          />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
