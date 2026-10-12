# Vito Wood Fired Pizza — website project

A five-page React + TypeScript website built with Vite. Pages: Home, About Us, Menu, Gallery and Contact. Includes responsive navigation, row-by-row scroll reveals, animated buttons, touch-enabled branch tilt cards and locally stored photography/logos.

## Build and run on a Windows PC

### 1. Install the tools

- Install **Node.js 24 LTS** from https://nodejs.org/ (Node 22.13 or newer is required).
- Optionally install Visual Studio Code from https://code.visualstudio.com/.
- Extract this ZIP first, for example to `C:\Projects\vito-pizza`. Do not run it from inside the ZIP.
- Open PowerShell or the VS Code terminal in the extracted folder that contains `package.json`.

Check Node and install this project's pinned package manager:

```powershell
node --version
npm.cmd install --global pnpm@11.25.0
pnpm.cmd --version
```

### 2. Install the dependencies

```powershell
pnpm.cmd install --frozen-lockfile
```

Internet access is required for the first installation. Keep `pnpm-lock.yaml` and `pnpm-workspace.yaml`; they preserve dependency versions and installation policy. The `install:ci` script is for the hosted Linux environment; use the command above on your PC.

### 3. Start the development website

```powershell
pnpm.cmd dev
```

Open **http://localhost:4173** in your browser. The terminal must stay open; edits appear automatically. Press **Ctrl+C** to stop. If that port is busy, use the URL printed by Vite.

### 4. Create the production build

```powershell
pnpm.cmd build
```

The finished website is created in **`dist/`**. This also generates metadata and entry files for all five page routes, plus `sitemap.xml`.

### 5. Check the production build locally

```powershell
pnpm.cmd start
```

Open **http://localhost:4173**. Do not double-click `dist/index.html`: the site needs an HTTP server for its assets and navigation.

On macOS/Linux, the same commands work using `npm` and `pnpm` without `.cmd`.

## Where to edit

| Content | File/folder |
| --- | --- |
| Shared navigation and footer, delivery links | `src/App.tsx` |
| Home, About, Menu, Gallery and Contact pages | `src/pages/` |
| Colours, layout, responsive spacing and image effects | `src/styles.css` |
| Branch addresses, phone numbers and image mapping | `src/data/site.ts` |
| Menu categories, items and prices | `src/data/menu.json` |
| Buttons, tilt cards, galleries, loader and reveals | `src/components/` |
| Images and logos | `public/images/` |
| Route titles, descriptions, sitemap and canonical domain | `scripts/route-metadata.mjs` |
| Browser entry point and global metadata | `index.html`, `src/main.tsx` |

The desktop hero button-to-divider minimum gap is **36px** in the final desktop media query in `src/styles.css`. Mobile spacing is unchanged.

## Delivery logo links

Both footer logo images are clickable links: PickMe uses `https://onelink.to/xrtqkg` (the QR destination published on its official Food page); Uber Eats uses `https://www.ubereats.com/lk`. They use provider-owned links so compatible mobile devices can open the installed app. App installation, operating-system link preferences and in-app browsers can affect whether a tap opens an app or a browser/download page. Desktop visitors get the provider's web destination. Search for **Vito** and choose your available branch inside the delivery service; these are not fabricated restaurant-specific order links.

## Optional hero video

The homepage currently uses Vito photography as its background. To enable video, add your final video to **`public/videos/vito-hero.mp4`** and rebuild. The video plays muted, loops and supports inline mobile playback. Reduced-motion users retain the photograph.

## Deploy on your own hosting

1. Change the existing Site domain in `scripts/route-metadata.mjs` and `src/App.tsx` to your domain. Check `index.html` and `public/robots.txt` for domain references as well.
2. Run `pnpm.cmd build` again.
3. Upload the **contents of `dist/`** to the public web root on a static host. Host at the domain root; a subfolder deployment needs matching Vite base and router configuration.
4. Configure the host to serve directory `index.html` files. If it requires SPA fallback rules, route unknown non-asset paths to `/index.html`.
5. Test direct visits and refreshes to `/about`, `/menu`, `/gallery` and `/contact`.

The existing `.openai/hosting.json` belongs to the original managed Site. It is not needed by your own static host. No API keys, database, login backend or environment variables are required to run this website. Some inherited starter components and tooling are retained, but `dev`, `build` and `start` use Vite.

## Troubleshooting

- **“node/pnpm is not recognized”**: close and reopen the terminal after installation, then check the versions again.
- **PowerShell script execution error**: use the `.cmd` commands shown above; changing the execution policy is unnecessary.
- **Install policy warning/error**: retain the lockfile and read the named package/error before changing policy. Do not delete the lockfile as a first fix.
- **Missing styles or blank page**: use `pnpm.cmd dev` or build and use `pnpm.cmd start`, not `file://`.
- **A route returns 404 on hosting**: enable directory indexes or the SPA fallback described above.
- **Fonts look different offline**: typography uses Google Fonts, which need an internet connection; fallback fonts are configured.

## Content and scope

Photography, menu data and contact details were retrieved from https://www.vitopizza.lk/ on 23 September 2026. Images are included locally. Menu source inconsistencies remain disclosed on the page. Replace assets/content as needed before reuse under another brand.

This is a restaurant information website. There is no shopping cart, payment processor or order-management backend. Order phone actions use the restaurant's phone numbers; delivery ordering happens in the external services.

The ZIP excludes dependencies (`node_modules`), local caches, Git history and build output. Recreate these with the commands above.
