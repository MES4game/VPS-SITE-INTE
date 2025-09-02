# VPS-SITE-INTE-FRONT

Author: BUREAU DES ELEVES DE POLYTECH PARIS-SACLAY
License: MIT

Front-end repo of integration site.

---

## Forking

Files to edit when forking:
- `LICENSE`
- `README.md`
- `package.json` (name, version, description, keywords, author, license, remove unused scripts and dependencies)
- `package-lock.json` (remove to regenerate)
- `webpack.config.js` (`plugins.webpack.DefinePlugin` only kept `process.env.NODE_ENV`)
- `public/index.html` (replace title and meta description)
- `public/manifest.json` (replace short_name and name)
- `public/{favicon.ico,logo192.png,logo512.png}` (replace icons)

---

## Customization

Modify files in `src` folder to customize the application (except `index.tsx`).

To edit outisde of src for customization:
- `webpack.config.js` (`plugins.webpack.DefinePlugin` to add environment variables to application)

---

## Commands
- `npm run lint` : lint the code with ESLint (automatically run before `dev` and `build`)
- `npm run dev` : run the application in development mode (with hot-reloading)
- `npm run build` : build the application for production
