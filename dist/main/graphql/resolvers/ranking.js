"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_resolver_1 = require("../../adapters/apollo-server-resolver");
const load_last_ranking_controller_1 = require("../../factories/load-last-ranking-controller");
exports.default = {
    Query: {
        lastRanking() {
            const controller = load_last_ranking_controller_1.makeLoadLastRankingController();
            return apollo_server_resolver_1.adaptResolver(controller);
        }
    }
};
