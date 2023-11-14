import { Response, Request, NextFunction } from "express";
import mongoose from 'mongoose'
import Video from "../Models/Video.model"

export const getVideos = async(req:Request, res:Response, next: NextFunction)=>{
    try {
        const videos = await Video.find()
        res.send(videos)
    } catch (error) {
        res.json(error)
    }
}

export const getOneVideo = async (req:Request, res:Response, next: NextFunction)=>{

    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid video ID" });
      }
      const videoFounded = await Video.findById(req.params.id);
      if (!videoFounded)
        return res.status(404).json({ message: "This video does not exist" });
      res.send(videoFounded);
    } catch (error) {
      res.json(error);
    }

}

export const createVideo = async(req:Request, res:Response, next: NextFunction)=>{

    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(301).json({ menssge: "This URL already exist" });
    try {
      const newVideo = new Video(req.body);
      const sevedVideo = await newVideo.save();
      res.send(sevedVideo);
    } catch (error) {
      res.json(error);
    }
}

export const editVideo = async(req:Request, res:Response, next: NextFunction)=>{
    
    try {
        const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(videoUpdated)
    } catch (error) {
        res.json(error)
    }

}

export const deleteVideo = async(req:Request, res:Response, next: NextFunction)=>{
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          return res.status(400).json({ message: "Invalid video ID" });
        }
        const videoDeteled = await Video.findByIdAndDelete(req.params.id);
        if (!videoDeteled)
          return res.status(404).json({ message: "This video does not exist" });
        res.status(200).json({message:'video succesfuly deleted'})
      } catch (error) {
        res.json(error);
      }
}


