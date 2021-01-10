"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadLastRankingController = void 0;
const http_1 = require("../contracts/http");
const ranking_score_1 = require("../view-models/ranking-score");
class LoadLastRankingController {
    constructor(lastRankingLoader) {
        this.lastRankingLoader = lastRankingLoader;
    }
    async handle() {
        try {
            const ranking = await this.lastRankingLoader.load();
            return http_1.ok(ranking_score_1.RankingScoreViewModel.mapCollection(ranking));
        }
        catch (error) {
            return http_1.serverError(error);
        }
    }
}
exports.LoadLastRankingController = LoadLastRankingController;
