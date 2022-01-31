import { Sortable } from "./Sorter";
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter implements Sortable {
    constructor(public data: number[]) {
        super();
    }

    get length() {
        return this.data.length;
    }

    compare(index: number) :boolean {
        return this.data[index] > this.data[index + 1];
    }

    swap (index: number) {
        [this.data[index], this.data[index + 1]] = [this.data[index + 1], this.data[index]];
    }
}