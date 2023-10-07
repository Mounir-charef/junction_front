import { Toaster } from "sonner";
import Map from "../components/Map";
const App = () => {
  return (
    <div className="h-screen" id="map">
      <Toaster richColors />
      <Map />
    </div>
  );
};

export default App;
