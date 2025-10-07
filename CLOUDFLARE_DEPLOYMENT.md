# Cloudflare Pages Deployment Guide

This site is configured to deploy to Cloudflare Pages.

## Option 1: Direct Deploy (Recommended)

### First Time Setup

1. **Install Wrangler CLI globally (optional)**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   npx wrangler login
   ```
   This will open your browser to authenticate with Cloudflare.

3. **Create a Pages project (first time only)**
   ```bash
   npx wrangler pages project create claire-pardington-website
   ```

### Deploy to Production

```bash
npm run deploy
```

This will:
- Build the site (`npm run build`)
- Deploy to Cloudflare Pages using Wrangler

### Deploy Preview

```bash
npm run deploy:preview
```

This creates a preview deployment on a separate URL for testing.

---

## Option 2: GitHub Integration (Automatic Deployments)

### Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** > **Create a project**
3. Select **Connect to Git** > Choose your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 20 or higher

### Automatic Deployments

Once connected, Cloudflare will automatically:
- Deploy production on push to `main` branch
- Create preview deployments for pull requests

---

## Build Configuration

The site uses:
- **Adapter**: `@astrojs/cloudflare` for static site generation
- **Output directory**: `dist`
- **Build command**: `npm run build`

## Environment Variables

If you need to add environment variables:

1. In Cloudflare Dashboard:
   - Go to **Pages** > Your project > **Settings** > **Environment variables**

2. Or via wrangler:
   ```bash
   npx wrangler pages secret put VARIABLE_NAME
   ```

## Custom Domain

To use a custom domain:

1. In Cloudflare Dashboard:
   - Go to **Pages** > Your project > **Custom domains**
   - Click **Set up a custom domain**
   - Follow the instructions to configure DNS

---

## Troubleshooting

### Build fails
- Check Node version (should be 18.17.1+ or 20.3.0+)
- Run `npm run check` locally to catch errors before deploying

### Deployment issues
- Ensure you're logged in: `npx wrangler whoami`
- Check build logs in Cloudflare Dashboard

### Need help?
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Astro Cloudflare Adapter Docs](https://docs.astro.build/en/guides/deploy/cloudflare/)
