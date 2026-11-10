# KhushNovaTech — Mandatory Coding Agent Rules

## Mission and scope
Work on the requested task only. Preserve existing functionality and visual design. Do not deploy, change DNS, send real emails, alter live databases, or expose secrets without explicit approval. This repository is local-first.

## Non-negotiable loop: BUILD → TEST → FIX → RETEST → NEXT
1. **Understand:** Read only the relevant files, confirm the expected behavior and acceptance criteria.
2. **BUILD:** Implement ONE small, complete change. Keep the diff focused.
3. **TEST:** Run the smallest relevant automated checks (typecheck/lint/unit test) and manual smoke check when UI is involved.
4. **FIX:** If a test fails, investigate the actual error, fix root cause, and avoid unrelated rewrites.
5. **RETEST:** Repeat the failed checks plus any affected regression tests until passing.
6. **NEXT:** Move to the next task ONLY after tests pass, or explicitly document a blocker and ask for input.
**Never mark a task complete without stating the test command and result. Never claim tests passed if not executed.**

## Token-efficient behavior
- Read `README.md`, `requirements.md`, and only task-relevant files; do not repeatedly dump the entire repository.
- Search by path/symbol before opening files; prefer targeted snippets and concise diffs.
- Plan at most 3-5 short steps for nontrivial work. Avoid repeating requirements in every response.
- Reuse existing components and utilities; do not create duplicate files or alternate implementations.
- Do not regenerate lockfiles or reinstall dependencies unless needed.
- Ask a question only if blocked by missing input or an irreversible choice; otherwise state a reasonable assumption.
- Summarize in <=8 lines: changed files, behavior, commands run, pass/fail, remaining blocker, next step.
- Keep logs concise; include only relevant error lines. Never print environment secrets.

## Code standards
- TypeScript strict; prefer explicit domain types, Zod validation for untrusted data.
- Next.js Server Components by default; add `use client` only when interactivity requires it.
- No unnecessary libraries, speculative microservices, or premature Redis.
- Avoid sequential fetches where independent; cache public data intentionally; do not cache personal submissions.
- Accessible semantic HTML; keyboard support; responsive layout; reduced motion.
- Error messages must not reveal credentials or stack traces.
- No contact inquiry database persistence.
- W3Forms public key is NOT a secret; never claim client-side hidden values are secure.

## Task checklist (copy into working notes)
- [ ] Scope and acceptance criteria identified
- [ ] Build implemented
- [ ] Relevant tests executed
- [ ] Failures fixed
- [ ] Tests rerun and passed
- [ ] Diff reviewed; no secrets or unrelated changes
- [ ] Concise completion report written

## Test matrix
- UI change: `pnpm --filter web typecheck`, `pnpm --filter web lint`, `pnpm --filter web test`, browser mobile/desktop smoke test.
- API change: `pnpm --filter api typecheck`, `pnpm --filter api test`, `/health` smoke test.
- Cross-package change: `pnpm typecheck`, `pnpm test`, `pnpm build`.
- Contact form: invalid fields, duplicate submit, successful mocked response, API error, timeout, keyboard navigation.

## Response template
**Built:** ...
**Tested:** command → PASS/FAIL/NOT RUN
**Fixed & retested:** ...
**Next:** ...
