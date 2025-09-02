# VPS-SITE-INTE

Author: BUREAU DES ELEVES DE POLYTECH PARIS-SACLAY
License: MIT

Root repo of integration site.

---

## Forking

Files to edit when forking:
- `.gitmodules` (only repo url and branch, not path)
- `LICENSE`
- `README.md`
- `.env`

---

## Customization

You can modify:
- `.env`
- `.secret` (only applies locally, not on GitHub repo)
- `run.sh` (called to run the site, front and/or back)
- `backup.sh` (called to backup the site data)

---

## Commands
- `./run.sh front dev` : run front in dev mode (or stop it if running)
- `./run.sh front` : build front for nginx
- `./run.sh back dev` : run back in dev mode (or stop it if running)
- `./run.sh back` : build and run back in prod mode (or stop it if running)
- `./backup.sh` : create a backup of the site data
