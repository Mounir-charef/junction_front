import { FC } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

interface UvaMarkerProps {
  drone: Drone;
}

const UvaMarker: FC<UvaMarkerProps> = ({ drone }) => {
  const map = useMap();

  if (!drone.gps?.lat || !drone.gps.lon) {
    return null;
  }
  return (
    <Marker
      position={[Number(drone.gps.lat), Number(drone.gps.lon)]}
      eventHandlers={{
        click: () => {
          map.setView([Number(drone.gps?.lat), Number(drone.gps?.lon)], 20, {
            animate: true,
            duration: 1000,
          });
        },
      }}
    >
      <Popup>
        <div className="flex flex-col w-60 gap-1 text-lg items-left">
          <span>The drone: {drone.id}</span>
          <span>State: {drone.state}</span>
          <span>Lat: {drone.gps.lat}</span>
          <span>Lng: {drone.gps.lon}</span>
          <Link to={drone.id} className={buttonVariants({ variant: "link" })}>
            Watch stream
          </Link>
        </div>
      </Popup>
    </Marker>
  );
};

export default UvaMarker;
