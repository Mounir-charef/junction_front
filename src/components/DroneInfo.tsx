import { FC } from "react";
import { Separator } from "./ui/separator";

interface DroneInfoProps {
  drone: Drone;
}

// interface InfoCellProps {
//   title: string;
//   value: string;
// }

// const InfoCell: FC<InfoCellProps> = ({ title, value }) => {
//   return (
//     <div className="flex w-4/5 mx-auto items-center justify-between">
//       {title}: <span>{value}</span>
//     </div>
//   );
// };

// TODO: rewrite this, maybe map through object keys.

const DroneInfo: FC<DroneInfoProps> = ({ drone }) => {
  return (
    <div className="flex flex-col text-foreground border-2 space-y-1 rounded-lg p-4">
      <span className="text-xl font-semibold text-center">
        Drone {drone.id}.
      </span>
      <div className="flex w-4/5 mx-auto items-center justify-between">
        State: <span>{drone.state}</span>
      </div>
      <div className="flex w-4/5 mx-auto items-center justify-between">
        Armed: <span>{drone.armed}</span>
      </div>
      <div className="flex w-4/5 mx-auto items-center justify-between">
        In Air: <span>{drone.in_air}</span>
      </div>
      <Separator className="w-4/5 mx-auto" />
      <div className="flex w-4/5 mx-auto items-center justify-between">
        Latitude: <span>{drone.gps?.lat}</span>
      </div>
      <div className="flex w-4/5 mx-auto items-center justify-between">
        Longitude: <span>{drone.gps?.lon}</span>
      </div>
      <div className="flex w-4/5 mx-auto items-center justify-between">
        GPS Fixation: <span>{drone.gps?.fx}</span>
      </div>
      <div className="flex w-4/5 mx-auto items-center justify-between">
        Satellites Number: <span>{drone.gps?.ns}</span>
      </div>
      <div className="flex w-4/5 mx-auto items-center justify-between">
        Absolute Altitude: <span>{drone.gps?.abs}</span>
      </div>
    </div>
  );
};

export default DroneInfo;
