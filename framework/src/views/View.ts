import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    regions: {[key: string]: Element} = {};

    abstract template(): string;

    constructor(public parent: Element, public model: T) {
        this.model.on('change', () => this.render());
    }

    eventsMap(): { [key: string]: () => void; } {
        return {};
    }

    regionsMap(): {[key: string]: string} {
        return {};
    }

    bindFragment(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let key in eventsMap) {
            const [eventName, selector] = key.split(':');

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[key]);
            });
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for(let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }

    onRender(): void {

    }

    render():void {
        this.parent.innerHTML = '';
        const tmplElement = document.createElement('template');
        tmplElement.innerHTML = this.template();

        this.bindFragment(tmplElement.content);
        this.mapRegions(tmplElement.content);
        this.onRender();
        this.parent.append(tmplElement.content);
    }
}