import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { PodcastsController } from "../controller/podcastsController";

const podcastsRouter = express();
const podcasts = container.resolve(PodcastsController);

podcastsRouter
  .route("/api/v1/podcasts/:page/:qtd")
  .get((req: Request, res: Response) => {
    return podcasts.get(req, res);
  });

podcastsRouter
  .route("/api/v1/podcasts/:id")
  .get((req: Request, res: Response) => {
    return podcasts.getById(req, res);
  });

export default podcastsRouter;
