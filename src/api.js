import axios from 'axios';

class Api {
  constructor() {
    this.baseUrl = 'https://api.myjson.com/bins/1g23pv';

    const axiosConfig = {
      baseURL: this.baseUrl,
    };

    this.axiosInstance = axios.create(axiosConfig);
  }

  get(endpoint, params) {
    return this.axiosInstance.get(endpoint, params);
  }
}

export default new Api();
