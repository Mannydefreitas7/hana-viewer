---
name: Bug report
about: Report a reproducible problem in hana-viewer
title: "bug: "
labels: ["bug"]
assignees: []
---

## Summary

A clear and concise description of the bug.

## Package version

- `hana-viewer` version:
- Installation method: `npm` / `bun` / other

## Environment

- OS:
- Browser (if relevant):
- Node.js version:
- Bun version (if relevant):
- React version:
- Package manager and version:

## Expected behavior

What you expected to happen.

## Actual behavior

What actually happened.

## Reproduction steps

Provide exact, minimal steps to reproduce:

1.
2.
3.

## Minimal reproduction

Please include a minimal code sample or link to a small reproduction repo/sandbox.

```/dev/null/tsx.tsx#L1-10
import React from "react";
import { HanaSplineViewer } from "hana-viewer";

export default function App() {
  return <HanaSplineViewer url="https://example.com/scene.hanacode" />;
}
```

## Logs / errors

Paste relevant console output, stack traces, or screenshots.

## Additional context

Anything else that might help diagnose the issue (recent changes, related issues, constraints, etc.).

## Checklist

- [ ] I searched existing issues and did not find a duplicate.
- [ ] I included environment details.
- [ ] I provided reproducible steps.
- [ ] I included a minimal reproduction or code sample.