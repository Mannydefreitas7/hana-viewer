# Contributing to `hana-viewer`

Thanks for contributing. This guide defines the expected workflow for changes, reviews, releases, and branch safety.

---

## Development setup

### Prerequisites

- Bun (latest stable)
- Node.js 20+
- npm account (only required for maintainers publishing releases)

### Install dependencies

```bash
bun install
```

### Local validation

Run these before opening a PR:

```bash
bun run typecheck
bun run build
npm pack --dry-run
```

These should succeed locally to match CI behavior.

---

## Branching and pull requests

### Branch naming (recommended)

Use descriptive branch names, for example:

- `feat/add-camera-props`
- `fix/react-prop-typing`
- `chore/update-deps`
- `docs/readme-improvements`

### Pull request requirements

All changes should be made through PRs (no direct pushes to `main`).

A PR is expected to include:

1. Clear title and summary of intent
2. Rationale for the change (what problem it solves)
3. Any behavior or API changes called out explicitly
4. Testing/validation notes (commands run, results)
5. Screenshots or usage examples when UI behavior changes

### Keep PRs focused

- Prefer small, reviewable PRs
- Avoid mixing unrelated refactors with feature/fix work
- If needed, split into multiple PRs

---

## CI expectations

The `CI` workflow validates:

1. Install dependencies with frozen lockfile
2. TypeScript type checking
3. Package build
4. `npm pack --dry-run` package verification

PRs must pass all required checks before merge.

If CI fails:

- Reproduce locally with the same commands
- Fix root cause (not just symptoms)
- Push updates to the same PR branch

---

## Code quality expectations

- Keep changes minimal and targeted
- Prefer explicit, readable code over cleverness
- Preserve backward compatibility where possible
- Update docs when behavior or public API changes
- Avoid introducing breaking changes without discussion

### Type safety

- Keep TypeScript strictness intact
- Avoid `any` unless there is a strong reason
- Ensure exported component types remain accurate for consumers

---

## Commit guidance

Use clear, actionable commit messages. Conventional commit style is encouraged:

- `feat: ...`
- `fix: ...`
- `docs: ...`
- `chore: ...`
- `refactor: ...`

Example:

```text
feat: expose loading and unloadable props in React wrapper
```

---

## Release and publishing process (maintainers)

Publishing is automated via GitHub Actions.

### Preconditions

- `NPM_TOKEN` secret exists in repository settings
- `main` is healthy (CI passing)

### Release steps

1. Bump version locally:

```bash
npm version patch
```

(Use `minor`/`major` when appropriate.)

2. Push commit and tag:

```bash
git push --follow-tags
```

3. Publish workflow triggers on tag pattern `v*.*.*` and publishes to npm.

### Manual publish trigger

The publish workflow also supports manual execution from the Actions tab (`workflow_dispatch`) when needed.

---

## Branch protection expectations (`main`)

`main` should remain protected with:

- Require pull request before merging
- Require at least one approval
- Require status checks to pass (including `CI / Typecheck and build`)
- Require branch to be up to date before merge
- Require conversation resolution before merge
- (Recommended) Prevent bypassing rules except for designated admins

No direct pushes to `main` except for controlled maintainer/admin operations.

---

## Dependency and packaging notes

Because this package wraps a runtime web component implementation:

- Keep runtime import paths publish-safe (relative, resolvable in npm package)
- Ensure required runtime assets are included in package files
- Validate package contents with `npm pack --dry-run` whenever packaging-related files change

---

## Reporting issues

When opening issues, include:

- Expected behavior
- Actual behavior
- Reproduction steps
- Environment details (Node/Bun versions, OS, package version)
- Minimal code sample when possible

---

## Questions and proposals

For substantial API or architecture changes, open an issue first to align on direction before implementation.

Thanks again for helping improve `hana-viewer`.