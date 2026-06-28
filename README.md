# SaaS Service Studio

A premium Next.js website for selling SaaS-style services: community systems, websites, backend setup, automation, and consulting.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Discord webhooks as temporary storage
- MongoDB-ready storage adapter for later migration
- Vercel hosting

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Discord setup

Create separate Discord channels and webhooks for:

- `#all-submissions`
- `#lead-database`
- `#community-leads`
- `#website-leads`
- `#backend-leads`
- `#consulting-leads`
- `#automation-leads`
- `#high-priority-leads`
- `#contact-messages`
- `#error-logs`

Add the webhook URLs to `.env.local` and Vercel environment variables.

## Architecture

For now, form submissions are validated server-side and routed into Discord channels as structured JSON messages. Later, replace `lib/storage/discord-storage.ts` with a MongoDB implementation while keeping the same adapter interface.
