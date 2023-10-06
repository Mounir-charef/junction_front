import { useSocketContext } from "@/context/MapProvider";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import UvaMarker from "./UvaMarker";
import { useRef } from "react";

function SetViewOnClick({
  animateRef,
}: {
  animateRef: React.MutableRefObject<boolean>;
}) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}

const Map = () => {
  const animateRef = useRef(true);
  const { droneIds } = useSocketContext();
  return (
    <MapContainer
      id="map"
      center={[51.505, -0.09]}
      zoom={1}
      scrollWheelZoom={true}
      className="h-full grow w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {droneIds.map((id) => (
        <UvaMarker key={id} id={id} />
      ))}
      <SetViewOnClick animateRef={animateRef} />
    </MapContainer>
  );
};

export default Map;
