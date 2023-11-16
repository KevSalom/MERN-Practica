import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideos, deleteVideo } from "../../utils/VideoServices";
import { Video } from "../../Interfaces/Video";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { toast } from 'react-toastify';



const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate =  useNavigate()
  
  const loadVideos = async () => {
    const { data } = await getVideos();
    setVideos(data);
  };

  const handleDelete = async(id:string)=>{
    const loading = toast.loading("Working on it...")
    try {
      await deleteVideo(id)
      toast.update(loading,{ render: "Video deleted", type: "success", isLoading: false,
      autoClose: 3000});
      await loadVideos()
    } catch (error:any) {
      console.error(error.response.data)
    }
   
  }

  const handleCardClick = (id:string)=>{
    navigate(`/edit/${id}`)
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
