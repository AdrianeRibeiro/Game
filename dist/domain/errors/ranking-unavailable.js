"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingUnavailableError = void 0;
class RankingUnavailableError extends Error {
    constructor() {
        super('Ranking unavailabe');
        this.name = 'RankingUnavailableError';
    }
}
exports.RankingUnavailableError = RankingUnavailableError;
