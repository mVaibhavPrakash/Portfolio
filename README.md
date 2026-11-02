# protfolio

[Live At](https://62d9a1c8b8af53005e66233c--dancing-jelly-474850.netlify.app/)

React portfolio built with TypeScript and Vite.

Use Node.js 24, as pinned in `.nvmrc` and the Netlify build configuration.

```sh
npm install
npm run dev
```

The development server opens at http://localhost:3000.

```sh
npm run typecheck
npm run build
npm run preview
```

The production build runs strict TypeScript checks and writes static files to `build/`.
Configure static hosting to publish that directory. `npm start` also runs the Vite development server.

Netlify reads `netlify.toml` to select Node.js 24, run the build, and publish `build/`.
After updating an existing Netlify site, redeploy with the build cache cleared.
