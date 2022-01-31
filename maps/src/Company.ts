import faker from 'faker';
import { Mappable } from './GMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    
    getContent() {
        return `<div>hello from <b>Company</b> ${this.companyName}! <p>${this.catchPhrase}</p></div>`;
    }
}