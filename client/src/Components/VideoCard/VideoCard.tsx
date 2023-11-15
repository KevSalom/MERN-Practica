import { Video } from "../../Interfaces/Video";

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  return (
    <div>
      <h2>{video.title}</h2>
      <span>{video.description}</span>
    </div>
  );
};

export default VideoCard;
