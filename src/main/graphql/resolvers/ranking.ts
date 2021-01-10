import { adaptResolver } from "../../adapters/apollo-server-resolver"
import { makeLoadLastRankingController } from "../../factories/load-last-ranking-controller"

export default {
    Query: {
        lastRanking (): Promise<any>  {
            const controller = makeLoadLastRankingController()
            
            return adaptResolver(controller)
        }
    }
}