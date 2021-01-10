export class RankingUnavailableError extends Error {
    constructor() {
        super('Ranking unavailabe')
        this.name = 'RankingUnavailableError'
    }
}