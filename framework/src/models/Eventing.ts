type Cb = () => void;

export class Eventing {
  observe: { [key: string]: Cb[] } = {};

  on = (eventName: string, callback: Cb): void => {
    this.observe[eventName] = this.observe[eventName] || [];
    this.observe[eventName].push(callback);
  }

  trigger = (eventName: string): void => {
    if (!(this.observe[eventName] && this.observe[eventName].length)) return;

    this.observe[eventName].forEach((callback) => callback());
  }
}
