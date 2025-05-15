
# GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

## Manual Deployment

To manually deploy to GitHub Pages:

1. Build the project:
   ```
   npm run build
   ```

2. Deploy the 'dist' folder to GitHub Pages:
   ```
   npm run deploy
   ```

## Automatic Deployment

This repository is configured with GitHub Actions for automatic deployment.
Every push to the main branch will trigger a new build and deployment.

## Configuration

- The site is configured to use relative paths in `vite.config.ts` with `base: './'`
- The GitHub workflow is configured in `.github/workflows/deploy.yml`
