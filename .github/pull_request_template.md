## Summary

<!-- Describe what this PR changes and why. Keep it concise and specific. -->

## Type of change

- [ ] feat (new functionality)
- [ ] fix (bug fix)
- [ ] refactor (internal change, no behavior change)
- [ ] docs (documentation only)
- [ ] chore (build/tooling/dependency updates)
- [ ] breaking change

## What changed

<!-- Bullet the key changes. -->
- 
- 
- 

## Why this change is needed

<!-- Explain the problem being solved or improvement being made. -->

## Validation performed

<!-- Required checks aligned with CI -->
- [ ] `bun run typecheck`
- [ ] `bun run build`
- [ ] `npm pack --dry-run`

### Validation notes / output

<!-- Paste relevant logs or notes if useful. -->

## Package impact

- [ ] No package/public API changes
- [ ] Public API changed (documented below)
- [ ] Packaging/publish metadata changed (`package.json`, workflows, files list, etc.)

### If API changed, describe it

<!-- Include before/after usage examples when applicable. -->

## Runtime and publish safety checklist

- [ ] Runtime imports remain publish-safe (no unresolved local aliases in published output)
- [ ] Required runtime files are included in package contents (e.g. `lib/hana.js`)
- [ ] `README.md` updated if usage or behavior changed
- [ ] `CONTRIBUTING.md` updated if process expectations changed

## CI / workflow impact

- [ ] No CI workflow changes
- [ ] CI/workflow files updated (`.github/workflows/*`) and validated

## Release notes (for maintainers)

<!-- Fill this if the PR should be included in release communication. -->
- Recommended version bump: [ ] patch [ ] minor [ ] major
- Notes:

## Linked issues

<!-- Use "Closes #123" when appropriate. -->
- 

## Reviewer checklist

- [ ] Scope is focused and changes are understandable
- [ ] Tests/validation are adequate for risk level
- [ ] Documentation is updated where needed
- [ ] CI is passing