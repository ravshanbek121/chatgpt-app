# Togger ChatGPT App

A minimal ChatGPT App that lists pizzas using a Vercel serverless function.

## Project layout

- `public/manifest.json` – ChatGPT manifest (update the `api.url` after deployment).
- `public/openapi.json` – OpenAPI spec consumed by ChatGPT.
- `public/ui/` – Static HTML/CSS UI served from Vercel.
- `api/pizzas.js` – Serverless function that returns the pizza list.
- `backend/pizzas.json` – Data source read by the API.
- `vercel.json` – Rewrites `/pizzas` to the serverless function and redirects `/` to the embedded UI.

## Local development

Install dependencies (only needed for Vercel CLI):

```bash
npm install -g vercel
```

Then run the full stack locally:

```bash
vercel dev
```

Visit `http://localhost:3000/ui/index.html` to view the UI and `http://localhost:3000/pizzas` for the API response.

## Deploy to Vercel

1. Commit your code and push it to GitHub/GitLab/Bitbucket.
2. In the Vercel dashboard, create a new project and import that repository.
3. Use the default settings (Framework preset: **Other**; Root directory: `/`).
4. After the first deployment finishes, note the production domain, e.g. `https://togger.vercel.app`.
5. Update `public/manifest.json` so `api.url` points to `https://togger.vercel.app/openapi.json`.
6. Commit the manifest change and trigger another deployment (push or `vercel --prod`).

Once deployed, the endpoints live at:

- UI: `https://<your-domain>.vercel.app/ui/index.html`
- API: `https://<your-domain>.vercel.app/pizzas`
- Manifest: `https://<your-domain>.vercel.app/manifest.json`
- OpenAPI: `https://<your-domain>.vercel.app/openapi.json`

You can now register the manifest URL inside ChatGPT’s Apps panel.
