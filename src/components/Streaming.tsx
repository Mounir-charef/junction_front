import ReactPlayer from "react-player";
import { BASE_STREAM_URL } from "@/constants";
import { useParams } from "react-router-dom";

const Streaming = () => {
  const { droneId } = useParams();
  console.log(droneId);
  return (
    <div>
      {droneId && (
        <ReactPlayer
          url={`${BASE_STREAM_URL}/${droneId[3]}`}
          width="100%"
          height="auto"
        />
      )}
    </div>
  );
};

export default Streaming;
