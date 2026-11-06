# AYUSH RAJ — THE SERIES

A cinematic, streaming-inspired portfolio for **Ayush Raj**, a backend developer and Computer Science student building full-stack and generative-AI projects.

> This personal portfolio uses a fictional streaming-platform style. It is not affiliated with any streaming service and uses none of their logos.

## Run locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

## Updating content

Portfolio copy and facts live in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update that file to change profile details, projects, skills, achievements, education, and experience.

- Replace `public/assets/Ayush_Raj_Resume.pdf` to update the downloadable resume.
- Replace `public/assets/Ayush_Raj_Photo.jpg` to update the portrait source.
- Run `npm run images` to rebuild responsive WebP portraits and the social share image.

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, and Lenis.

## Accessibility and performance

- `prefers-reduced-motion` is respected throughout the opening, scrolling, cursor, tilt, particles, and pinned project rail.
- Hover effects only run on devices with a precise pointer; touch devices use tap interactions and native swipe rails.
- Overlays close with Esc, and the highlight reel supports Space and the arrow keys.
- Portraits are served as responsive WebP images and overlays are code-split.
