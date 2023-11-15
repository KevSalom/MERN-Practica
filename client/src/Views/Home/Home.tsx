import { useEffect, useState } from "react";
import { getVideos } from "../../utils/VideoServices";
import { Video } from "../../Interfaces/Video";
import VideoCard from "../../Components/VideoCard/VideoCard";

const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const loadVideos = async () => {
    const { data } = await getVideos();
    setVideos(data);
  };
  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};

export default Home;
