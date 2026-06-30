# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Lancer le site sur Windows

Si PowerShell affiche une erreur du type "l'execution de scripts est desactivee", lance le fichier :

```bat
start-site.bat
```

Ou utilise cette commande depuis PowerShell :

```powershell
npm.cmd run dev
```

Puis ouvre l'adresse affichee par Vite, generalement :

```text
http://localhost:5173/
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
