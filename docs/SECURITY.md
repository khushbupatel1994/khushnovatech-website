# Security checklist
- W3Forms browser access key is public; store it in `.env.local` for configuration, not secrecy.
- Restrict allowed domains and enable provider spam defenses where supported.
- Never put private SMTP credentials, database credentials, or service tokens in `NEXT_PUBLIC_*`.
- Client validation can be bypassed; provider must enforce anti-abuse controls.
- Honeypot is only a weak signal; do not promise full bot protection.
- Avoid collecting unnecessary PII and never log message bodies by default.
- Form response acceptance is not proof of inbox delivery.
- Rotate any credentials accidentally disclosed in screenshots or commits.
- Before production, review CSP, headers, privacy text, dependencies, and abuse handling.
