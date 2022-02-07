import { View } from "./View";
import {User, UserProps} from '../models/User';

export class UserForm extends View<User, UserProps> {
    eventsMap(): {[key:string]: () => void} {
        return {
            'click:.js-set-random-age': this.setRandomAge,
            'click:.js-change-name': this.setNameClick,
            'click:.js-save-user': this.onSave
        }
    }

    onSave = (): void => {
        console.log("sssave")
        this.model.save();
    }
    
    setRandomAge = (): void => {
        this.model.setRandomAge();
    }

    setNameClick = ():void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({name});
        }
    }

    template(): string {
        return `<div>
            <button class="js-set-random-age">Set random age</button>
            <input placeholder="${this.model.get('name')}" />
            <button class="js-change-name">Change name</button>
            <button class="js-save-user">Save</button>
        </div>`;
    }
}