import Fastify from "fastify";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
export async function createApp() {
  const app = Fastify({ logger: true, bodyLimit: 65536 });
  await app.register(helmet);
  await app.register(rateLimit, { max: 100, timeWindow: "1 minute" });
  app.get("/health", async () => ({ status: "ok", service: "khushnovatech-api" }));
  return app;
}
