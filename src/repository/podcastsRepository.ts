import mongoose from "mongoose";
import { Podcasts } from "../models/podcasts";

const PodcastsSchema = new mongoose.Schema<Podcasts>({
  titulo: { type: String },
  texto: { type: String },
  imagem: { type: String },
  duracao: { type: String },
  link: { type: String },
  url: { type: String },
  dataPublicacao: { type: Date },
  tags: { type: String },
  ativo: { type: Boolean },
});

export const PodcastsRepository = mongoose.model<Podcasts>(
  "podcasts",
  PodcastsSchema
);
