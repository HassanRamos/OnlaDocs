# Sorahub Restaurant Management Documentation

Generated: 2026-06-30 08:17 UTC

This is a static HTML documentation project for the restaurant management system.

## How to open locally

Open `index.html` in any modern browser.

## How to host

Upload the full folder contents to any static hosting location, cPanel `public_html`, an Nginx folder, Apache folder, or subdomain. No database or backend is required.

## Main folders

- `index.html` — home page and documentation menu map.
- `pages/` — one HTML page per menu item.
- `assets/css/styles.css` — site styling.
- `assets/js/app.js` — navigation search and mobile menu.
- `assets/screenshots/` — place your final screenshots here.
- `assets/reference-menu-screenshots/` — menu screenshots used to plan the documentation structure.
- `DOCS_PLAN.md` — the full documentation structure and screenshot plan.
- `SOURCE_REFERENCES.md` — vendor documentation URLs supplied as reference links.

## Updating screenshots

Each documentation page contains a screenshot placeholder with a suggested filename. Capture the real screen from your installed system, save it in `assets/screenshots/`, then edit the relevant HTML page to replace the placeholder with an image tag, for example:

```html
<img class="doc-screenshot" src="../assets/screenshots/pos.png" alt="POS screen">
```

You can also keep the placeholders while the documentation is still being drafted.
