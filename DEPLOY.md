# SajiloHealth — Deployment

Static React frontend (CRA + Craco). No backend.

## Cloudflare Pages (Wrangler) — recommended

Paste these into the Cloudflare Pages / Workers Builds setup screen:

| Field | Value |
| --- | --- |
| **Root directory** | `frontend` |
| **Build command** | `yarn build` |
| **Build output directory** | `build` |
| **Deploy command** | `npx wrangler pages deploy build` |
| **Node version** | `20` (set env var `NODE_VERSION=20`) |

First-time setup (run locally once if the project doesn't already exist on Cloudflare):

```bash
npx wrangler pages project create sajilo-health
```

Then push to your production branch — Cloudflare will install, build, and deploy automatically.

### SPA routing
`public/_redirects` is configured so all routes fall back to `index.html`:

```
/*    /index.html   200
```

### `wrangler.jsonc`
A minimal `wrangler.jsonc` is included at the repo root pointing at `frontend/build`.

## Vercel / Netlify

| Field | Value |
| --- | --- |
| Root directory | `frontend` |
| Install | `yarn install` |
| Build | `yarn build` |
| Output | `build` |
| Node | `20` |

Both platforms auto-detect CRA; the `_redirects` file is also respected by Netlify.

## Local development

```bash
cd frontend
yarn install
yarn start        # http://localhost:3000
yarn build        # production build → frontend/build
```
