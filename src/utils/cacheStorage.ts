import { EXPIRE_TIME } from "../constants/constant";
import { Sick } from "../types/SickType";

// fetchResponse에 응답 시간 정보를 담은 header 추가해서 캐시 저장
export const setCache = async (keyword: string, data: Sick[]) => {
  const cacheStorage = await caches.open("sick");
  const header = new Headers();
  header.append("SET_DATE", new Date().toISOString());

  const response = new Response(JSON.stringify(data), { headers: header });
  cacheStorage.put(keyword, response);
};

export const getCache = async (keyword: string) => {
  const cacheStorage = await caches.open("sick"); // sick 이라는 이름의 캐시 저장소 열기
  const cachedResponse = await cacheStorage.match(keyword);

  if (cachedResponse) {
    if (isExpired(cachedResponse)) {
      const request = new Request(keyword);
      await cacheStorage.delete(request);
      return null;
    } else {
      return cachedResponse;
    }
  }
  return null;
};

const isExpired = (cacheResponse?: Response) => {
  const cachedDate = cacheResponse?.headers.get("SET_DATE");

  if (!cachedDate) return;
  const fetchDate = new Date(cachedDate).getTime();
  const today = new Date().getTime();

  return today - fetchDate > EXPIRE_TIME;
};
