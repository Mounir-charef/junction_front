/// <reference types="vite/client" />

interface Drone {
  id: string;
  bat?: {
    id?: number;
    vl?: number;
    pt?: number;
  };

  gps?: {
    fx?: number;
    lat?: number;
    lng?: number;
    ns?: number;
    abs?: number;
  };
  armed?: number;
  state?: number;
  in_air?: boolean;
}
