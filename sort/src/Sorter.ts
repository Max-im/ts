export interface Sortable {
    length: number;
    compare(index: number): boolean;
    swap(index: number): void;
    print(): void;
}

export abstract class Sorter {
    abstract compare(index: number): boolean;
    abstract swap(index: number): void;
    abstract length: number;
    abstract data: any;

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j)) {
                    this.swap(j);
                }
            }
        }
    }

    print(): void {
        console.log(this.data);
    }
}