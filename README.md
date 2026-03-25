# hana-viewer

React wrapper for the `hana-viewer` web component.

This package exports a React component:

- `HanaSplineViewer`

It wraps the custom element class from `lib/hana.js` using `@lit/react`.

---

## Install

```/dev/null/bash.sh#L1-1
npm install hana-viewer
```

---

## Usage

```/dev/null/tsx.tsx#L1-19
import React from "react";
import { HanaSplineViewer } from "hana-viewer";

export default function App() {
  return (
    <HanaSplineViewer
      url="https://example.com/scene.hanacode"
      width={1280}
      height={720}
      loading="eager"
      unloadable={false}
      eventsTarget="local"
      onLoaded={() => {
        console.log("Hana scene loaded");
      }}
    />
  );
}
```

---

## Development

Install dependencies:

```/dev/null/bash.sh#L1-1
bun install
```

Type-check:

```/dev/null/bash.sh#L1-1
bun run typecheck
```

Build:

```/dev/null/bash.sh#L1-1
bun run build
```

See `CONTRIBUTING.md` for the full contribution workflow (branching, PR requirements, CI expectations, and release process).

---

## Build output

The build produces ESM + TypeScript declarations in `dist/`:

```/dev/null/text.txt#L1-4
dist/
  index.js
  index.d.ts
```

Package entry points are configured through `package.json` exports.

---

## Publish workflow (npm)

1. Build and verify package contents locally:

```/dev/null/bash.sh#L1-3
bun run build
npm pack
tar -tf hana-viewer-*.tgz
```

2. Confirm tarball includes:
   - `dist/*`
   - `lib/hana.js` (runtime dependency)
   - `README.md`
   - `LICENSE` (if present)

3. Login to npm (if needed):

```/dev/null/bash.sh#L1-1
npm login
```

4. Publish:

```/dev/null/bash.sh#L1-1
npm publish
```

For scoped packages, publish as public:

```/dev/null/bash.sh#L1-1
npm publish --access public
```

---

## Release process

1. Bump version:

```/dev/null/bash.sh#L1-1
npm version patch
```

(Use `minor` or `major` when appropriate.)

2. Push commit and tag:

```/dev/null/bash.sh#L1-1
git push --follow-tags
```

3. Publish to npm:

```/dev/null/bash.sh#L1-1
npm publish
```

---

## Automated publish with GitHub Actions

You can automate npm publishing on version tags (for example: `v0.1.1`).

### 1) Add repository secrets

In your GitHub repository settings, add:

- `NPM_TOKEN` — npm automation token (publish permission for this package)

### 2) Create workflow file

Create `.github/workflows/publish.yml`:

```/dev/null/yml.yml#L1-48
name: Publish to npm

on:
  push:
    tags:
      - "v*.*.*"
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: publish-${{ github.ref }}
  cancel-in-progress: false

jobs:
  publish:
    name: Build and publish package
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Setup Node.js (for npm publish)
        uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: "https://registry.npmjs.org"

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Build package
        run: bun run build

      - name: Verify package contents
        run: npm pack --dry-run

      - name: Publish to npm
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 3) Release flow

1. Bump version in `package.json`:
```/dev/null/bash.sh#L1-1
npm version patch
```
2. Push commit and tag:
```/dev/null/bash.sh#L1-1
git push --follow-tags
```
3. GitHub Actions publishes automatically when a `v*.*.*` tag is pushed (for example `v0.1.1`), and you can also run it manually from the Actions tab via `workflow_dispatch`.

---

## CI validation workflow

A separate CI workflow runs on pull requests and on pushes to `main` to validate the package before release.

Workflow file:

- `.github/workflows/ci.yml`

Checks performed:

1. Install dependencies with a frozen lockfile
2. Run TypeScript type-checking
3. Build the package
4. Run `npm pack --dry-run` to verify publishable package contents

You can also run the CI workflow manually from the Actions tab via `workflow_dispatch`.

---

## Issue and pull request templates

This repository includes GitHub templates to standardize issue reporting and code review context.

### Issue templates

Location:

- `.github/ISSUE_TEMPLATE/bug_report.md`
- `.github/ISSUE_TEMPLATE/feature_request.md`
- `.github/ISSUE_TEMPLATE/config.yml`

Behavior:

- Blank issues are disabled
- Users are guided to:
  - Discussions for questions/support
  - Private security advisories for vulnerability reports

### Pull request template

Location:

- `.github/pull_request_template.md`

The PR template captures:

- Change type and summary
- Validation steps (`typecheck`, `build`, `npm pack --dry-run`)
- Package/public API impact
- Runtime/publish safety checklist
- CI/workflow impact
- Release note hints for maintainers

## Notes

- The runtime component class is imported via a publish-safe relative import:
  - `../lib/hana.js`
- Keep `lib/hana.js` included in published files, since the wrapper depends on it at runtime.
- `prepublishOnly` runs the build automatically before publish.