import { Video } from "../../Interfaces/Video";
import ReactPlayer from "react-player";

interface Props {
  video: Video;
  handleDelete: (id: string) => void;
  handleCardClick: (id: string) => void;
}

const VideoCard = (props: Props) => {
  const { video, handleDelete, handleCardClick } = props;
  return (
    <div className="col-md-4">
      <div className="card card-body ">
        <div className="d-flex justify-content-between">
          <h3 onClick={()=> video._id && handleCardClick(video._id)} style={{cursor:'pointer'}}>{video.title}</h3>
          <button onClick={() => video._id && handleDelete(video._id) } style={{cursor:'pointer'}}>X</button>
        </div>

        <span>{video.description}</span>
        <ReactPlayer url={video.url} width="100%" />
      </div>
    </div>
  );
};

export default VideoCard;
