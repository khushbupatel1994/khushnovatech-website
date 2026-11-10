# KhushNovaTech — Next.js + Node.js Starter

**Status:** Architecture scaffold / minimal runnable starter, NOT a migrated website. Existing HTML assets have not been provided. Local development only; no deployment.

## Stack
- `apps/web`: Next.js App Router, React, TypeScript, CSS, W3Forms contact form
- `apps/api`: Node.js, Fastify, TypeScript, health API
- `prisma`: PostgreSQL schema for public site content (NO inquiry storage)
- `packages/validation`: shared Zod validation
- pnpm workspace + Turborepo

## Requirements
- Node.js 22 LTS (see `.nvmrc`)
- pnpm 9 (`corepack enable`; `corepack prepare pnpm@9.15.4 --activate`)
- PostgreSQL 16+ only when enabling content persistence; not needed to run basic web/API
- W3Forms account and access key for actual email delivery

## Quick start (Windows PowerShell)
1. Open the extracted folder in VS Code.
2. Run `corepack enable` and `corepack prepare pnpm@9.15.4 --activate` (or install pnpm 9).
3. Run `pnpm install`.
4. Copy `apps/web/.env.local.example` to `apps/web/.env.local` and set your W3Forms access key.
5. Run `pnpm dev`.
6. Visit `http://localhost:3000` (contact: `/contact`); API health: `http://localhost:4000/health`.
7. Run `pnpm typecheck`, `pnpm lint`, `pnpm test`, then `pnpm build`.

> Do not commit real keys. No SMTP password is needed for W3Forms.

## GitHub Pages deployment

The website can be published as a static GitHub Pages site. The workflow in
`.github/workflows/deploy-pages.yml` builds `apps/web` and deploys it after
every push to `main`. In the repository settings, set **Pages → Source** to
**GitHub Actions**. If W3Forms email delivery is needed, add the public
W3Forms access key as the repository secret
`NEXT_PUBLIC_W3FORMS_ACCESS_KEY` before deploying.

The Fastify API and PostgreSQL database are not hosted by GitHub Pages; they
need a separate Node/PostgreSQL host if they are enabled later.

## Contact security
The browser submits directly to W3Forms. A `NEXT_PUBLIC_` access key is PUBLIC, not a secret; it is visible in browser requests. Configure W3Forms domain restrictions, CAPTCHA/anti-spam options if available, and monitor abuse in the provider dashboard. Client validation/honeypot are usability and basic spam measures, NOT server-enforced security. For strict rate limiting, add a server-side proxy and provider-supported protections. W3Forms response success means provider accepted the submission, not guaranteed inbox delivery.

## Architecture decisions
- Next.js already uses React; no separate React/Vite app.
- Fastify is reserved for future content APIs, not the W3Forms submission path.
- PostgreSQL stores site content only; do not store contact submissions.
- Public pages should prefer static/server rendering, minimizing unnecessary client JS and API calls.
- No AI agent/chatbot feature is implemented; `AGENTS.md` contains coding-agent instructions.

## Documents
- `AGENTS.md`: mandatory agent workflow and token efficiency rules
- `docs/ARCHITECTURE.md`: boundaries and performance
- `docs/IMPLEMENTATION_PLAN.md`: staged tasks with acceptance criteria
- `docs/SECURITY.md`: contact and secrets checklist
- `requirements.md`: functional/nonfunctional requirements

## Known limits
Starter includes Home, Contact, placeholder Services/Portfolio/Team/About/Privacy/Terms pages. Existing visual design and features require your latest original project ZIP for accurate migration. Tests are starter checks; run full QA before launch.
