import fs from 'fs';

export class CSVReader {
  data: string[][]= [];
  
  constructor(public filepath: string) {}
  
  read(): void {
    this.data = fs
      .readFileSync(this.filepath, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
