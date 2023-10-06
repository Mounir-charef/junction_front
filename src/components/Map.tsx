import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSocketContext } from "@/context/MapProvider";

const Map = () => {
  const { drones } = useSocketContext();
  console.log(drones);
  return (
    <MapContainer
      id="map"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full grow w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
