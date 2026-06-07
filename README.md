# AI Deck Studio — Demo

An auto-playing, looping showcase of the **Maverx AI Training Builder**: describe a
training in one line and watch it become an on-brand, editable slide deck with
trainer speaker notes.

This is a self-contained front-end demo. The whole flow is scripted on canned data
(no backend, no API key), so it loads instantly and deploys as a static site.

**What it shows**

- A guided cursor that types the brief, then moves and clicks like a product ad.
- The AI reading the first message and pre-filling the answers it can extract.
- AI follow-up questions, with smooth, eased transitions between them.
- Generation stages, then a styled slide preview that auto-advances.
- Seeded deck history in the sidebar.

It reuses the real product's UI components, so it's pixel-identical to the live app.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

The homepage (`/`) is the demo. It auto-plays and loops.

## Deploy

It's a standard Next.js app — deploy to Vercel by importing this repo (no special
configuration; the project root is the app root). The demo needs no environment
variables.

## Tech

Next.js (App Router), TypeScript, Tailwind CSS. Built from a Figma design,
frame by frame.
