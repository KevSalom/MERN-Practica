import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideos, deleteVideo } from "../../utils/VideoServices";
import { Video } from "../../Interfaces/Video";
import VideoCard from "../../Components/VideoCard/VideoCard";


const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate =  useNavigate()
  
  const loadVideos = async () => {
    const { data } = await getVideos();
    setVideos(data);
  };

  const handleDelete = async(_id:string)=>{
    await deleteVideo(_id)
  }

  const handleCardClick = (id:string)=>{
    navigate(`/editvideo/${id}`)
  }  

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos.map((video) => (
        <VideoCard video={video} handleDelete={handleDelete} handleCardClick={handleCardClick}  />
      ))}
    </div>
  );
};

export default Home;
