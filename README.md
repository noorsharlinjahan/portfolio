# Noor Sharlin Jahan — Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS v4, and Vite. This project was migrated from a Replit workspace to a standard, standalone Node app.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and npm installed.

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

To compile the application into static HTML, CSS, and JavaScript files:

```bash
npm run build
```

This will run TypeScript type checking and output the compiled static assets to the `dist/` directory.

---

## 🌐 Static Deployment Guide

Because the project builds into standard static files, you can deploy it to any static web hosting provider. Below are instructions for the most popular options.

### Option 1: Cloudflare Pages / Vercel / Netlify (Recommended)

These platforms provide the best experience for static SPA hosting and automatically configure routing.

1. Connect your GitHub repository to **Vercel**, **Netlify**, or **Cloudflare Pages**.
2. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:**
     - `BASE_PATH`: `/` (Default, or leave blank)
3. For single-page application (SPA) routing:
   - **Vercel:** Automatically handled, or add a `vercel.json` with a rewrite rule.
   - **Netlify:** Create a `public/_redirects` file containing:
     ```text
     /*   /index.html   200
     ```
   - **Cloudflare Pages:** Automatically redirects fallback routes to `index.html` for SPAs.

### Option 2: GitHub Pages

Since GitHub Pages serves sites from subdirectories (e.g. `https://<username>.github.io/<repo-name>/`), you must configure the base path during build time.

1. In your GitHub Pages repository settings, set the source to deploy from the `gh-pages` branch or configure GitHub Actions.
2. Build with the `BASE_PATH` environment variable:
   ```bash
   BASE_PATH=/nsj-portfolio/ npm run build
   ```
   *(Replace `/nsj-portfolio/` with your repository name, keeping the leading and trailing slashes.)*
3. Deploy the contents of the `dist/` folder to the `gh-pages` branch.

#### GitHub Actions Automation (Optional)

Create a workflow file under `.github/workflows/deploy.yml` to automatically build and deploy on every push:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-size: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          BASE_PATH: /${{ github.event.repository.name }}/

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

---

## 🛠️ Project Structure

- `src/` — Contains source React and TypeScript components, pages, hooks, and stylesheets.
- `public/` — Static assets (favicon, images, portfolio upload folder) which are copied directly to the build folder.
- `vite.config.ts` — Vite configuration.
- `tsconfig.json` — Self-contained TypeScript configurations.
