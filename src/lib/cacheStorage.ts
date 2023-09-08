const EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24시간

class CacheStorage {
  cacheName: string;

  constructor(cacheName: string) {
    this.cacheName = cacheName;
  }

  async get(key: string) {
    const cache = await caches.open(this.cacheName);
    const response = await cache.match(key);

    if (response) {
      if (this.isExpired(response)) {
        const request = new Request(key);
        await cache.delete(request);
        return null;
      } else {
        return response;
      }
    }
  }

  async set(key: string, value: string) {
    const cache = await caches.open(this.cacheName);
    const header = new Headers();
    header.append("FETCH_DATE", new Date().toISOString());

    const response = new Response(JSON.stringify(value), { headers: header });
    cache.put(key, response);

    console.info("calling api");
  }

  private isExpired(response: Response) {
    const fetchDate = new Date(response.headers.get("FETCH_DATE")!).getTime();
    const today = new Date().getTime();

    return today - fetchDate > EXPIRE_TIME;
  }
}

export default CacheStorage;
