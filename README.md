# Shiva Balan — Portfolio

A hand-drawn, green & white developer portfolio built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173) in your browser.

## Building for production

```bash
npm run build
```

This runs a TypeScript check and outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

No environment variables are required.

## Updating content later

All editable content lives in `src/data/`, so you can update it without touching any components:

- `src/data/projects.ts` — projects, including the `github` and `demo` URLs (currently `"#"` placeholders — replace these with your real links). Also where you'll swap in the real Mindmate AI banner once it exists: add the image to `src/assets/banners/`, import it at the top of the file, and set it as `image` for the `mindmate-ai` entry.
- `src/data/skills.ts` — skill groups and tags.
- `src/data/experience.ts` — internship entries for the timeline.
- `src/data/education.ts` — education entry.
- `src/data/certifications.ts` — certifications.
- `src/data/profile.ts` — name, roles, tagline, email, phone, social links, resume file.

To replace the resume, drop a new PDF into `public/` and update `resumeUrl` / `resumeFilename` in `src/data/profile.ts`.

## Project structure

```
src/
  assets/       banners, hero illustration, profile photo
  components/   shared UI (Navbar, ProjectCard, ProjectModal, doodles, icons, ...)
  sections/     one component per page section (Hero, Projects, Contact, ...)
  data/         structured content (see above)
  index.css     Tailwind v4 theme tokens + global styles
```

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (animations, respects `prefers-reduced-motion`)
- lucide-react (icons)
- Patrick Hand (self-hosted via `@fontsource/patrick-hand` — no external font requests)
