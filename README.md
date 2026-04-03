# Ceres Example

A self-contained, forkable sandbox for independently building, testing, and deploying custom Handlebars templates for the Ceres document renderer.

This repository is designed specifically for independent creators, designers, and frontend devs. It provides everything you need to build custom invoice, quotation, and document templates without relying on the core Ceres repository.

> [!IMPORTANT]
> If the automated deployment fails on your first push, ensure GitHub Pages is enabled:
>
> 1. Go to your repository **Settings → Pages**.
> 2. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

## Features

- **Isolated Build System:** Uses the exact same Webpack configuration as the core Ceres engine.
- **AI-Ready:** Includes built-in agent files and guardrails (`AGENTS.md`, `.agent/skills`) to supercharge your workflow with LLMs.
- **Creator Friendly:** No strict corporate linting rules (ESLint, Stylelint). Pre-configured to Node 22 (`.nvmrc`).
- **Live Preview Modal:** A floating developer UI to instantly inject API payloads and generate Lydia-compatible manifest URLs.
- **Zero-Config Deployment:** Automatically deploys bundled templates to GitHub Pages via Actions.

---

## 📄 Included Templates

### `default-template`
A modern, full-featured invoice template with a colorful gradient totals section, grid-based info blocks, and a polished card-style layout. Great as a starting point for commercial invoices.

### `advocate-bill`
A formal, traditional bill template designed for legal professionals and advocates. Features:
- **Serif typography** (Cormorant Garamond headings, Libre Baskerville body) for a classic legal document feel
- Centered header with name, title, and qualifications
- Reference number and date row
- Clean two-column bill table (Description / Amount)
- Total with amount in words
- Signature area with right-aligned bank details
- Contact footer with address, phone, and email

---

## 🚀 Getting Started

### 1. Installation

Clone or fork this repository, then install dependencies:

```bash
nvm use    # Ensures you refer to Node 22
npm install
```

### 2. Scaffold a Template

The repository comes with `default-template` and `advocate-bill`. You can duplicate either folder under `src/templates/` to start a new design.

Each template folder requires four core files:

- `template.hbs`: The Handlebars HTML structure.
- `styles.css`: The styling for your document.
- `index.ts`: Entrypoint exporting `window.CeresTemplate`.
- `version.json`: Semantic versioning `{ "version": "1.0.0" }`.

### 3. Build & Serve locally

To compile the bundles and start the local development server:

```bash
npm run build
npx http-server ./dist -p 8081
```

> Open [http://127.0.0.1:8081](http://127.0.0.1:8081) in your browser. The app will automatically redirect to `?devMode=1` and bring up the Live Preview modal.

---

## 🛠 Using the Live Preview Modal

Because Ceres relies on dynamically fetching data, the `ceres-example` UI comes with a floating **DevBridge Modal** in the bottom-right corner.

### Loading a Template

1. In the **Load Template** field, type your folder name (e.g., `example-template`).
2. Click **Load**. The page will reload and fetch your template's manifest.

### Injecting API Data

By default, the renderer will stall at "Trying to load document..." if it lacks payload data.

1. Paste an external sample API URL (or a local JSON server URL) into the **API URL Settings** field.
2. Click **Load API**. The URL will be base64-encoded via URL parameters and the template will immediately render your data.

### Exporting for Lydia

Once you are happy with the design and it works flawlessly on localhost, you need to point Lydia to your published bundle:

1. Ensure your changes are deployed to GitHub pages.
2. Enter the absolute URL of your published Template in the modal.
3. The **Template Path** field will present the raw, unencoded path. Click **Copy** and drop this manifest URL directly into Lydia!

---

## ☁️ Deployment (GitHub Pages)

This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`).

Every time you push to the `master` branch, GitHub Actions will:

1. Run `npm run build`
2. Upload the `dist/` folder
3. Publish it to your repository's GitHub Pages.

