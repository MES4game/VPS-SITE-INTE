# VPS-SITE-INTE-BACK

Author: BUREAU DES ELEVES DE POLYTECH PARIS-SACLAY
License: MIT

Back-end repo of integration site.

---

## Forking

Files to edit when forking:
- `LICENSE`
- `README.md`
- `package.json` (name, version, description, keywords, author, license, remove unused scripts and dependencies)
- `package-lock.json` (remove to regenerate)

---

## Customization

Modify files in `src` folder to customize the application.

To edit outisde of src for customization:
- `db-init.sql`: SQL script to initialize the database (create tables, etc.)

---

## Commands
- `npm run lint` : lint the code with ESLint (automatically run before `dev` and `build`)
- `npm run dev` : run the application in development mode
- `npm run build` : build the application for production
- `npm run start` : run the application in production mode
