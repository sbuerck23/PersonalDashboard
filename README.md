# Dashboard React App

Scaffolded with Vite + React + TypeScript + Tailwind CSS.

Get started:

1. Install dependencies

   npm install

2. Start Tailwind CLI in watch mode (generates `src/tailwind.css`)

   npm run tailwind:watch

3. In another terminal, start the dev server

   npm run dev

4. Build for production

   npm run build

Notes:
- Tailwind is built via the Tailwind CLI into `src/tailwind.css`. This avoids PostCSS runtime integration.
- The source file with Tailwind directives is `src/index.css`. Do not import `index.css` directly in your app — the generated `src/tailwind.css` is imported by `src/main.jsx`.
- `postcss.config.cjs` and the `autoprefixer` dependency have been removed.
# Dashboard React App

Scaffolded with Vite + React + TypeScript + Tailwind CSS.

Get started:

1. Install dependencies

   npm install

2. Start dev server

   npm run dev

3. Build

   npm run build

Notes:

- Tailwind is configured via `tailwind.config.cjs` and `postcss.config.cjs`.
- The main entry is `src/main.tsx` and `src/App.tsx` shows a basic Tailwind layout.
