import React from "react";
import ReactDOM from "react-dom/client";
import App from "./scenes/App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import DroneStream from "./scenes/DroneStream.tsx";
import MultiStream from "./scenes/MultiStream.tsx";
import { SocketProvider } from "./context/MapProvider.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path="/:droneId" element={<DroneStream />} />
      <Route path="/streams" element={<MultiStream />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  </React.StrictMode>
);
