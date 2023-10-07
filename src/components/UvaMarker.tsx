import { FC } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { icon } from "leaflet";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import droneUrl from "@/assets/drone.svg";

interface UvaMarkerProps {
  drone: Drone;
}

const UvaMarker: FC<UvaMarkerProps> = ({ drone }) => {
  const map = useMap();
  const DroneIcon = icon({
    iconUrl: droneUrl,
    className: "text-primary",
    iconSize: [55, 55],
    iconAnchor: [15, 15],
  });

  if (!drone.gps?.lat || !drone.gps.lon) {
    return null;
  }
  return (
    <Marker
      icon={DroneIcon}
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
