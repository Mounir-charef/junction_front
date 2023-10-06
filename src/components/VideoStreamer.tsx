import { BASE_STREAM_URL } from "@/constants";
import { FC, useEffect, useRef } from "react";
import OvenPlayer from "ovenplayer";

interface VideoStreamerProps {
  id: string;
}

const VideoStreamer: FC<VideoStreamerProps> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      OvenPlayer.create("stream", {
        mute: true,
        sources: [
          {
            file: `${BASE_STREAM_URL}/${id}`,
            type: "webrtc",
          },
        ],
        autoStart: true,
        controls: true,
      });
    }
  }, [id]);
  return (
    <div className="h-96 aspect-video">
      <div ref={ref} id="stream"></div>
    </div>
  );
};

export default VideoStreamer;
