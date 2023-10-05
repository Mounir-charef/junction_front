import { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import io from "socket.io-client";

const App = () => {
  const [streamUrl, setStreamUrl] = useState(null);
  const socket = useRef(io("your_websocket_server_url"));

  useEffect(() => {
    // Handle incoming WebSocket data and set the stream URL
    socket.current.on("stream", (data) => {
      setStreamUrl(data.url);
    });

    // Clean up the WebSocket connection on unmount
    return () => {
      socket.current.disconnect();
    };
  }, []);

  return (
    <div>
      {streamUrl && (
        <ReactPlayer
          url={streamUrl}
          controls={true}
          width="100%"
          height="auto"
          playing={true}
        />
      )}
    </div>
  );
};

export default App;
