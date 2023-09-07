import { Sick } from "../types/SickType";
import { getCache, setCache } from "../utils/cacheStorage";
import instance from "./axios";

const getData = async (keyword: string): Promise<Sick[]> => {
  try {
    const cachedResponse = await getCache(keyword);
    if (cachedResponse) return cachedResponse.json();
    console.log("calling api");

    // const response = await instance.get(`/sick?q=${keyword}`);
    const response = await instance.get("/sick", {
      params: {
        q: keyword,
      },
    });

    await setCache(keyword, response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getData;
