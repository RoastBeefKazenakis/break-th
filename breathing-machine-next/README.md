# Breathing Machine — Next.js wrapper

Wraps the 3D Rube Goldberg breathing machine (**h-branch**) for Vercel,
mirroring the Pomo d'Orso wrap.

- The machine ships **byte-identical** in `public/breathing-animation-rube-goldberg-3d-h.html`
  (MD5 `049d25e1256753bf8ee34c22a7b75069`) — zero behavior drift.
- `app/page.tsx` embeds it in a full-viewport iframe (server component; no
  client observers needed — the machine has no ticking tab title to mirror).
- h-branch changes vs g: the `MINI-GOLF BREATHING` legend is gone; the
  top-left pill now holds a fullscreen toggle (⛶ button + `F` key) beside the
  station name.

## Build & deploy

Standard Next.js build — **no `output: "export"`**, no `out/` folder
(the `out/` static-export setup 404'd on Vercel last time; the default
Next.js preset serves this with zero config):

```
npm install
npm run build   # -> .next/
```

Deploy: Framework Preset **Next.js**, Root Directory = this folder, all defaults.
