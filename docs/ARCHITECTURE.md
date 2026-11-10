# Architecture
Browser → Next.js App Router (React server/client components) → optional Fastify JSON API → PostgreSQL.
Contact flow is separate: Browser → W3Forms HTTPS API → configured recipient inbox. No inquiry database.

## Performance defaults
- Render public pages statically where possible.
- Limit `use client` to interactive components.
- Use `next/image` for migrated images and optimize sizes.
- Keep animations transform/opacity based and respect reduced motion.
- Add indexes only for observed query patterns and inspect `EXPLAIN ANALYZE`.
- Add caching only with explicit invalidation strategy; measure before adding Redis.
- Reuse keep-alive connections and avoid unnecessary API round trips.

## Ownership
`apps/web`: pages and contact UI. `apps/api`: content/business APIs. `prisma`: structured content schema. `packages/validation`: shared schemas.
