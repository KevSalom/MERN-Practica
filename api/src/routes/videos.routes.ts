import { Router } from "express";
import * as controllers from "./video.controller";

export const videoRouter = Router();

videoRouter.get("/getvideos", controllers.getVideos);

videoRouter.get("/getvideo/:id", controllers.getOneVideo);

videoRouter.post("/newvideo", controllers.createVideo);

videoRouter.put("/editvideo/:id", controllers.editVideo);

videoRouter.delete("/deletevideo/:id", controllers.deleteVideo);
