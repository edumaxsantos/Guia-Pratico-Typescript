import { IPodcastsService } from "../contracts/iPodcastsService";
import { Result } from "../infra/result";
import { Podcasts } from "../models/podcasts";
import { PodcastsRepository } from "../repository/podcastsRepository";

export class PodcastsService implements IPodcastsService {
  async get(_id: string): Promise<Podcasts> {
    let result = await PodcastsRepository.findById(_id);
    return result!;
  }
  async getAll(page: number, qtd: number): Promise<Result<Podcasts>> {
    let result = new Result<Podcasts>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await PodcastsRepository.count({});
    result.Data = await PodcastsRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }
}
