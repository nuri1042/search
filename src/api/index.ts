import { Sick } from "../types/SickType";
import { getCache, setCache } from "../utils/cacheStorage";
import instance from "./axios";

// const getData = async (keyword: string) => {
//   if ("caches" in window) {
//     const cacheStorage = await caches.open("sick"); // sick이라는 이름의 캐시 생성
//     const cachedResponse = await cacheStorage.match(keyword);

//     if (!cachedResponse) {
//       console.info("calling api");
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_END_POINT}`,
//         {
//           params: {
//             q: keyword,
//           },
//         }
//       );

//       const store = response.data;
//       cacheStorage.put(keyword, new Response(JSON.stringify(store)));
//       return store;
//     }
//     const cached = await cachedResponse?.json(); // 일치하는 항목이 있으면 cache storage에 저장되어있는 항목 사용

//     return cached;
//   }
//   return [];
// };
// export default getData;

const getData = async (keyword: string): Promise<Sick[]> => {
  const cachedResponse = await getCache(keyword);
  if (cachedResponse) return cachedResponse.json();
  console.log("calling api");

  const response = await instance.get(`/sick?q=${keyword}`);
  // const response = await instance.get("/sick", { params: { q: keyword } });

  await setCache(keyword, response.data);
  return response.data;
};

export default getData;
