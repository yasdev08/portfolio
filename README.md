# yasserm.vercel.app

Portfolio of Yasser Mecherrem. French at `/`, English at `/en/`.
Same visual language as the YESIR DESIGN site and the 3D Sign Studio: dark blueprint grid,
Inter Tight + Instrument Serif + JetBrains Mono, and an interactive 3D sign (three.js) in the hero.

## Edit content
- Text, projects, experience, soft skills: `data/cv.ts` (both languages).
- Workshop photos: `public/work/*.webp`, listed in `workBase` in `data/cv.ts`.
- 3D hero: `components/SignScene.tsx`.

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Deploy (same URL as today)
Replace the contents of the GitHub repo behind yasserm.vercel.app (`yasdev08/portfolio`) with this folder and push.
Vercel detects Next.js and builds it. The site is a static export (`output: "export"` in `next.config.ts`).
