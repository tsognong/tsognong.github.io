# tsognong.github.io

Personal site with research, engineering projects, and open education / security platform offerings.

## Stack
- Static hosting via GitHub Pages (user site)
- Tailwind CSS (local build) with PostCSS + Autoprefixer

## Development
Install dependencies:
```bash
npm install
```
Run in watch mode while editing:
```bash
npm run dev
```
Build optimized CSS for production:
```bash
npm run build
```
The generated file is written to `assets/tailwind.css` and referenced by `index.html`.

## Adding Styles
Edit `src/input.css` and use `@tailwind` layers plus custom `@layer` blocks. Rebuild (or keep `npm run dev` running).

## Content Sections
- About / Skills / Research / Projects / Collaboration / Contact

## Deployment
Push to `main` branch; GitHub Pages serves root automatically. No build action required—CSS output is committed.

## Future Enhancements (Ideas)
- Dark mode toggle
- Structured data (JSON-LD for publications & person)
- Contact form with static backend (Formspree / Netlify)
- Asset optimization + image placeholders

## License
Content © 2025 Tsognong. Code samples MIT unless stated otherwise.
