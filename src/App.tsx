import Map from "./components/Map";
import { SocketProvider } from "./context/MapProvider";
const App = () => {
  return (
    <div
      className="container max-w-7xl flex justify-center h-screen items-center"
      id="map"
    >
      <SocketProvider>
        <Map />
      </SocketProvider>
    </div>
  );
};

export default App;
