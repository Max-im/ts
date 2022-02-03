import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Cb = () => void;

export class User {
  observe: { [key: string]: Cb[] } = {};

  constructor(private data: UserProps) {}

  get(prop: string): number | string {
    return this.data[prop];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Cb):void {
      this.observe[eventName] = this.observe[eventName] || [];
      this.observe[eventName].push(callback);
  }

  trigger(eventName: string): void {
      if (!(this.observe[eventName] && this.observe[eventName].length)) return;

      this.observe[eventName].forEach(callback => callback());
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => this.set(response.data));
  }

  save():void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
