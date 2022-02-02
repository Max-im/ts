import fs from 'fs';
import { OutputTarget } from "../Summary";

export class HTMLReport implements OutputTarget {
    print(report: string) {
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Analyses Output</title>
            </head>
            <body>
                <div>${report}</div>
            </body>
            </html>
        `;

        fs.writeFileSync('./output/report.html', html);
    }
}