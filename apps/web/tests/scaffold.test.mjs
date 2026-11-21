import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
test("contact form submits to Web3Forms and avoids inquiry DB", () => {
  const code = readFileSync(new URL("../src/components/forms/ContactForm.tsx", import.meta.url), "utf8");
  assert.match(code, /api\.w3forms\.com\/submit/);
  assert.match(code, /AbortController/);
  assert.match(code, /NEXT_PUBLIC_W3FORMS_ACCESS_KEY/);
  assert.doesNotMatch(code, /DATABASE_URL|prisma\.inquiry/);
});
