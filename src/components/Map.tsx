import { useSocketContext } from "@/context/MapProvider";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import SideBar from "./SideBar";
import UvaMarker from "./UvaMarker";
import Navbar from "./Navbar";

const Map = () => {
  const { drones } = useSocketContext();
  return (
    <MapContainer
      id="map"
      center={[48.505, -0.09]}
      zoom={2}
      scrollWheelZoom={true}
      className="h-full grow w-full relative"
      zoomControl={false}
      zoomAnimation={true}
      minZoom={2}
    >
      <Navbar />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {drones.map((drone) => {
        if (!drone.gps?.lat || !drone.gps?.lat) return;
        return <UvaMarker key={drone.id} drone={drone} />;
      })}
      <ZoomControl position="bottomright" />
      <SideBar />
    </MapContainer>
  );
};

export default Map;
