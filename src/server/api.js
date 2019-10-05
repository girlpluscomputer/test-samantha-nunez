import axios from 'axios';

class Api {
  constructor() {
    this.baseUrl = 'https://api.myjson.com/bins/cx66v';

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
