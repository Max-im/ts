import { Collection } from "../models/Collection";


export abstract class CollectionView<T, K> {
    abstract renderItem(model: T, itemParent: Element): void; 
    constructor(public parent: Element, public collection: Collection<T, K>) {}

    render(): void {
        this.parent.innerHTML = '';
        const tmplElement = document.createElement('template');
        
        for (let model of this.collection.models) {
            const wrapper = document.createElement('div');
            this.renderItem(model, wrapper);
            tmplElement.content.append(wrapper);
        }

        this.parent.append(tmplElement.content);
    }
}