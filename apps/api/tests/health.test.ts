import test from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/app.js";
test("health endpoint", async () => {
  const app = await createApp();
  try { const response = await app.inject({ method: "GET", url: "/health" }); assert.equal(response.statusCode, 200); assert.equal(response.json().status, "ok"); }
  finally { await app.close(); }
});
