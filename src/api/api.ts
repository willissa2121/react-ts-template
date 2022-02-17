// You may notice this file is named ts instead of tsx. That is becasue no HTML is returned or rendered here.

import axios from 'axios';

class API {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}
  // The port of your server, you will need to install cors. Call me if huge hassle its a bitch
  port = 5000;
  url = `http://localhost:${this.port}`;
  axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  // Do not fuck with this logic. This is a perfect API in js standards.
  get = async (route: string) => {
    return new Promise((res, rej) => {
      axios
        .get(`${this.url}/api/${route}`, this.axiosConfig)
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };

  update = async (route: string, body: any) => {
    return new Promise((res, rej) => {
      axios
        .put(`${this.url}/api/${route}`, body, this.axiosConfig)
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };

  post = async (route: string, body: any = {}) => {
    return new Promise((res, rej) => {
      axios
        .post(`${this.url}/api/${route}`, body, this.axiosConfig)
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };

  delete = async (route: string, body?: any) => {
    return new Promise((res, rej) => {
      axios
        .delete(`${this.url}/api/${route}/${body.id}`, this.axiosConfig)
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  };
}

export const api = new API();
