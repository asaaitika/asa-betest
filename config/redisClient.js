const redis = require("redis");

class RedisClient {
  constructor() {
    this.client = redis.createClient({
      url: "redis://localhost:6379",
    });
  }

  connect() {
    this.client.on("error", (err) => console.log("Redis Client Error", err));
    this.client.connect().then(() => console.log("Connected to Redis"));
  }

  getClient() {
    return this.client;
  }

  async get(key) {
    return await this.client.get(key);
  }

  async set(key, value) {
    await this.client.set(key, value);
  }

  async setEx(key, seconds, value) {
    await this.client.set(key, value, "EX", seconds);
  }
}

module.exports = new RedisClient();
