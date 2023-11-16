import axios from "axios";
import { Video } from "../Interfaces/Video";

const URL = "http://localhost:3000";

export const getVideos = async () => {
  return await axios.get(`${URL}/getvideos`);
};

export const getVideo = async (id: string) => {
  return await axios.get(`${URL}/getvideo/${id}`);
};

export const createVideo = async (data: Video) => {
  return await axios.post(`${URL}/newvideo`, data);
};

export const editVideo = async (id: string, data: Video) => {
  return await axios.get(`${URL}/editvideo/${id}`, { data });
};

export const deleteVideo = async (id: string) => {
  return await axios.get(`${URL}/deletevideo/${id}`);
};
