import { Sortable } from "./Sorter";
import { Sorter } from "./Sorter";

export class StringCollection extends Sorter implements Sortable{
    constructor(public data: string) {
        super();
    }

    get length() {
        return this.data.length;
    }

    compare(index: number) :boolean {
        return this.data[index].toLowerCase() > this.data[index + 1].toLowerCase();
    }

    swap (index: number) {
        const dataArr = this.data.split('');
        [dataArr[index], dataArr[index + 1]] = [dataArr[index + 1], dataArr[index]];
        this.data = dataArr.join('');
    }
}