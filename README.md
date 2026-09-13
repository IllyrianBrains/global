# IB Global Conference Website

A minimal Astro starter for `global.illyrianbrains.org`, inspired by the clean structure of modern conference websites.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Astro.

## Edit conference information

Most homepage content is in:

```text
src/data/conference.ts
```

The design is in:

```text
src/styles/global.css
```

## Deploy with GitHub Pages

1. Create a GitHub repository and push these files to the `main` branch.
2. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. The included `.github/workflows/deploy.yml` will build and deploy the site.
4. The repository already includes `public/CNAME` with:

```text
global.illyrianbrains.org
```

5. Add the DNS CNAME at your domain provider:

```text
Name: global
Type: CNAME
Target: <github-user-or-org>.github.io
```

## Suggested next step

Move workshops and other repeating content from `conference.ts` into Astro content collections / Markdown when the content starts growing.
