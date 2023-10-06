import { Toaster } from "sonner";
import Map from "./components/Map";
import { SocketProvider } from "./context/MapProvider";
const App = () => {
  return (
    <div className="h-screen" id="map">
      <Toaster richColors />
      <SocketProvider>
        <Map />
      </SocketProvider>
    </div>
  );
};

export default App;
