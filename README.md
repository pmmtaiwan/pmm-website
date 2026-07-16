# Philharmonia Moments Musicaux Website

Production-ready website shell for **Philharmonia Moments Musicaux / 樂興之時管絃樂團**.

Core identity: **Good Music. Period.**

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- MDX-ready content structure
- ESLint
- Prettier

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run lint
```

## Content

Sample content is separated from presentation in `content/`:

- `content/experiences.ts`
- `content/ideas.ts`
- `content/journal.ts`
- `content/navigation.ts`

This is intentionally structured so the project can later move to MDX files or a headless CMS such as Sanity or Contentful without rebuilding the page architecture.

## Routes

- `/`
- `/philosophy`
- `/experiences`
- `/experiences/[slug]`
- `/ideas`
- `/ideas/[slug]`
- `/journal`
- `/journal/[slug]`
- `/listen`
- `/people`
- `/support`
- `/about`
- `/contact`

## Deployment

The project is ready for Vercel deployment.

Recommended settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output: Next.js default

No environment variables are required for the current shell.

## Internationalization Readiness

Full `/en` and `/zh` routing is not implemented in this first shell. Navigation and content are centralized so locale routing can be added later without changing the core component architecture.
