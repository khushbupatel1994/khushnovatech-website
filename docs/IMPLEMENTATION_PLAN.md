# Build → Test → Fix → Retest → Next

1. **Scaffold:** boot web/API locally; `pnpm typecheck && pnpm test && pnpm build`.
2. **Migrate design:** import real HTML/CSS/assets; visually compare desktop/mobile; fix regressions.
3. **Contact:** configure W3Forms access key and provider restrictions; test with mock responses first; send one real test only with user approval.
4. **Content:** implement Fastify read APIs and PostgreSQL only where dynamic content is needed; test query performance.
5. **Optimize:** Lighthouse, Core Web Vitals, bundle inspection, API p95 measurements; fix measured bottlenecks.
6. **Hardening:** a11y, security headers, spam controls, monitoring; no production deployment without permission.

For every phase: BUILD → TEST → FIX → RETEST → NEXT. Record evidence, not assumptions.
