import { useSocketContext } from "@/context/MapProvider";
import { FC, useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

interface UvaMarkerProps {
  id: string;
}

const UvaMarker: FC<UvaMarkerProps> = ({ id }) => {
  const map = useMap();

  const { socket } = useSocketContext();
  const [drone, setDrone] = useState<Drone>({
    id,
  });
  useEffect(() => {
    if (socket) {
      // TODO: change switch case with mapping
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
              setDrone((prev) => {
                return { ...prev, state: data as number };
              });
              break;
            case "armed":
              setDrone((prev) => {
                return { ...prev, armed: data as number };
              });
              break;
            case "in_air":
              setDrone((prev) => {
                return { ...prev, in_air: data as boolean };
              });
              break;
            case "lat":
              setDrone((prev) => {
                return { ...prev, gps: { ...prev.gps, lat: data as number } };
              });
              break;
            case "lng":
              setDrone((prev) => {
                return { ...prev, gps: { ...prev.gps, lng: data as number } };
              });
              break;
            case "fx":
              setDrone((prev) => {
                return { ...prev, gps: { ...prev.gps, fx: data as number } };
              });
              break;
            case "nx":
              setDrone((prev) => {
                return { ...prev, gps: { ...prev.gps, ns: data as number } };
              });
              break;
            case "abs":
              setDrone((prev) => {
                return { ...prev, gps: { ...prev.gps, abs: data as number } };
              });
              break;
            case "batId":
              setDrone((prev) => {
                return { ...prev, bat: { ...prev.bat, id: data as number } };
              });
              break;
            case "batVl":
              setDrone((prev) => {
                return { ...prev, bat: { ...prev.bat, vl: data as number } };
              });
              break;
            case "batPt":
              setDrone((prev) => {
                return { ...prev, bat: { ...prev.bat, pt: data as number } };
              });
              break;
          }
        }
      );
    }
  }, [socket, id]);
  if (!drone.gps?.lat || !drone.gps.lng) {
    return null;
  }
  return (
    <Marker
      position={[drone.gps.lat, drone.gps.lng]}
      eventHandlers={{
        click: () => {
          map.setView(
            [drone.gps?.lat as number, drone.gps?.lng as number],
            14,
            {
              animate: true,
              duration: 1000,
            }
          );
        },
      }}
    >
      <Popup>
        A pretty CSS3 popup. <br /> Easily {id}.
      </Popup>
    </Marker>
  );
};

export default UvaMarker;
