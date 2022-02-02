import { MatchReader } from "./MatchReader";
import { CSVReader } from "./CSVReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalyses } from "./analyzers/WinsAnalyses";

const filepath = 'assets/football.csv';
const team = 'Man United';

const reader = new CSVReader(filepath);
const matchReader = new MatchReader(reader);

matchReader.load();

const summary = new Summary(
    new WinsAnalyses(team),
    new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.withHtmlReport(team)
summary2.buildAndPrintReport(matchReader.matches);

// inheratince example
// const reader = new MatchReader(filepath);
// reader.read();
// console.log(reader.data);



