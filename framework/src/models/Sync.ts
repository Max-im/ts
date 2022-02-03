import axios, { AxiosPromise } from 'axios';

interface HasID {
  id?: number
}

export class Sync<T extends HasID> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    if (data.id) {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    } 
    return axios.post(this.rootUrl, data);
  }
}
