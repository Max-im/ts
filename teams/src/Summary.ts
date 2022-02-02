import { MatchData } from './MatchData';
import { HTMLReport } from './reportTargets/HTMLReport';
import { WinsAnalyses } from './analyzers/WinsAnalyses'

export interface Analizer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static withHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalyses(team),
      new HTMLReport()
    );
  }

  constructor(public analizer: Analizer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analizer.run(matches);
    this.outputTarget.print(report);
  }
}
