import { BASE_STREAM_URL } from "@/constants";
import { FC, useEffect, useRef } from "react";
import OvenPlayer from "ovenplayer";
import { cn } from "@/lib/utils";

interface VideoStreamerProps {
  id: string;
  className?: string;
}

const VideoStreamer: FC<VideoStreamerProps> = ({ id, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      OvenPlayer.create(id, {
        mute: true,
        sources: [
          {
            file: `${BASE_STREAM_URL}/${id}`,
            type: "webrtc",
          },
        ],
        autoStart: true,
        controls: true,
        loop: true,
      });
    }
  }, [id]);
  return (
    <div
      className={cn("h-96 aspect-video rounded-xl overflow-hidden", className)}
    >
      <div ref={ref} id={id}></div>
    </div>
  );
};

export default VideoStreamer;
