import axios from "axios";

let config = {
  timeout: 60 * 1000 * 2,
  withCredentials: true,
  baseURL: "",
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  async (config) => {
    config.headers = {
      // "Access-Control-Allow-Credentials": true,
      // "Access-Control-Request-Headers":"x-requested-with",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      "Access-Control-Allow-Origin": "*",
      // "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Methods":"*",

    };
    // 如果存在token 就携带token
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  (response) => {
    const res=response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default _axios;
