/// <reference types="vite/client" />

interface Drone {
  id: string;
  bat?: {
    batId?: string;
    batVl?: string;
    batPt?: string;
  };

  gps?: {
    fx?: string;
    lat?: string;
    lon?: string;
    ns?: string;
    abs?: string;
  };
  armed?: string;
  state?: string;
  in_air?: boolean;
}
