import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import CacheStorage from "../lib/cacheStorage";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

class Http {
  axiosInstance: AxiosInstance;

  constructor(
    baseURL: string,
    private cache = new CacheStorage("sick")
  ) {
    this.axiosInstance = axios.create({ baseURL });
  }

  async request(config: RequestConfig) {
    const cacheKey = this.generateCacheKey(config);

    try {
      const cachedResponse = await this.cache.get(cacheKey);
      if (config.method === "GET" && cachedResponse)
        return cachedResponse.json();

      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: config.url,
        params: config.query,
        data: config.body,
      };
      const res: AxiosResponse = await this.axiosInstance(axiosConfig);
      if (config.method === "GET") {
        this.cache.set(cacheKey, res.data);
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  private generateCacheKey(config: RequestConfig): string {
    return `${config.method}_${config.url}_${JSON.stringify(
      config.query || {}
    )}`;
  }
}

const http = new Http(BASE_URL || "");

export default http;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type RequestConfig = {
  method: HttpMethod;
  url: string;
  query?: any;
  body?: any;
};
