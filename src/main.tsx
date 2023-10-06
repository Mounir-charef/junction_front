import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import Streaming from "./components/Streaming.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path="/:droneId" element={<Streaming />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
