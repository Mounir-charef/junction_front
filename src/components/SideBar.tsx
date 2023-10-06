import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSocketContext } from "@/context/MapProvider";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import VideoStreamer from "./VideoStreamer";
import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";
import { buttonVariants } from "./ui/button";

const SideBar = () => {
  const { drones } = useSocketContext();
  return (
    <div className="absolute px-1 flex w-12 flex-col items-center text-background cursor-auto justify-start py-2 gap-4 inset-y-4 top-[4.5rem] left-4 bg-primary dark:bg-secondary-background rounded-xl z-[10000]">
      {drones.map((drone) => (
        <Sheet key={drone.id}>
          <SheetTrigger>
            <Icon
              icon="mingcute:drone-line"
              key={drone.id}
              className={cn("cursor-pointer hover:opacity-75 h-10 w-10", {
                "text-background": drone.state === "1",
                "text-red-700": drone.state === "2",
                "text-blue-700": drone.state === "3",
                "text-green-700": drone.state === "4",
                "text-red-400": drone.state === "5",
              })}
            />
          </SheetTrigger>
          <SheetContent className="z-[100000]">
            <SheetHeader>
              <SheetTitle>Drone : {drone.id}</SheetTitle>
              <SheetDescription>
                This is the stream the drone is recording in real time
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col px-4 mt-2">
              <VideoStreamer id={drone.id[3]} />
              <Link
                to={drone.id}
                className={buttonVariants({
                  variant: "default",
                  className: "flex items-center gap-2",
                })}
              >
                <Link2 /> Watch in full screen
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default SideBar;
