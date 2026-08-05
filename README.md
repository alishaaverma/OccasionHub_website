# Occasion Hub

Occasion Hub is a responsive event-planning website built with Next.js, React, and TypeScript. It includes decoration catalogs, customizable dinner menus, page search, and WhatsApp booking enquiries.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run lint
npm run build
npm run start
```

All site images are stored locally in `public/images` and are rendered with `next/image`.

## Deploy to Vercel

The repository includes an automated workflow at `.github/workflows/vercel-deploy.yml`:

- pull requests targeting `main` create preview deployments;
- pushes to `main` create production deployments;
- either environment can also be deployed manually from the Actions tab.

### One-time setup

1. Create or select a project in the [Vercel dashboard](https://vercel.com/new).
2. From this project directory, run `npx vercel@latest login` and then `npx vercel@latest link`.
3. Read `orgId` and `projectId` from the generated `.vercel/project.json` file.
4. Create a Vercel access token from **Account Settings → Tokens**.
5. Copy those values into the ignored `.env.local` file for local CLI use. Do not commit that file.
6. In the GitHub repository, open **Settings → Secrets and variables → Actions** and add:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
7. Push to `main`, open a pull request, or run **Vercel Deployment** manually from GitHub Actions.

Vercel Git auto-deployments are disabled in `vercel.json` because GitHub Actions owns the deployment lifecycle. This prevents duplicate deployments. Secrets and the generated `.vercel` project link are intentionally ignored and must never be committed.
