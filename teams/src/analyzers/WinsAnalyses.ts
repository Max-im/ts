import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analizer } from "../Summary";

export class WinsAnalyses implements Analizer {
    constructor(public team: string) {}
    run (matches: MatchData[]):string {
        let teamWinsCounter = 0;

        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                teamWinsCounter++;
            } else if(match[2] === this.team && match[6] === MatchResult.AwayWin) {
                teamWinsCounter++;
            }
        }

        return `Team ${this.team} won ${teamWinsCounter} games`;
    }
}