import { Podcasts } from "../models/podcasts";
import { IService } from "./iService";

/**
 * Contrato IPodcastsService
 * @summary esse contrato implementa a interface IService passando a model de Podcasts
 */
export interface IPodcastsService extends IService<Podcasts> {}
