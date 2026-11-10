# KhushNovaTech requirements (starter baseline)

## Functional
1. Next.js/React responsive marketing site: Home, Services, Portfolio, Team, About, Contact, Privacy, Terms.
2. Preserve existing premium purple/glass design and motion when original assets are supplied.
3. W3Forms email-only contact: name, phone, email, message; validation, loading, accessible status, basic honeypot.
4. No contact data in PostgreSQL.
5. Node.js/Fastify backend reserved for future structured content endpoints.
6. PostgreSQL/Prisma schema for services and projects; no admin or auth until explicitly scoped.
7. Localhost development; no deployment without approval.

## Nonfunctional
- TypeScript strict mode; no hardcoded credentials; environment examples only.
- Mobile responsive; keyboard accessible; reduced-motion preference.
- Prefer static Next.js pages, small bundles, lazy loaded noncritical UI.
- API validation, bounded payloads, error handling; add monitoring before production.
- Target Core Web Vitals: LCP <2.5s, INP <200ms, CLS <0.1 (field measurements).
- Measure p95 API latency under defined load rather than claim untested speed.

## Out of scope for this scaffold
Existing HTML conversion, admin dashboard, AI chatbot, deployment, production database provisioning.
