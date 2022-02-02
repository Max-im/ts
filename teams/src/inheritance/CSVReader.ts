import fs from 'fs';

export abstract class CSVReader<T> {
  data: T[]= [];
  
  constructor(public filepath: string) {}
  
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filepath, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
