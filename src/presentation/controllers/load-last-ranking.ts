import { throws } from 'assert'
import { LastRankingLoader } from '../../domain/usecases'
import { Controller } from '../contracts'
import { HttpResponse, serverError, ok } from '../contracts/http'
import { RankingScoreViewModel } from '../view-models/ranking-score'

export class LoadLastRankingController implements Controller {
    constructor(private readonly lastRankingLoader: LastRankingLoader) {}

    async handle (): Promise<HttpResponse<RankingScoreViewModel[]>> {

        try {

            const ranking = await this.lastRankingLoader.load()
            return ok(RankingScoreViewModel.mapCollection(ranking))
            
        } catch (error) {

            return serverError(error)
            
        }
    }
} 