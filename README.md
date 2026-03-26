# hana-viewer

![Hana spline-inspired illustration](https://raw.githubusercontent.com/Mannydefreitas7/hana-viewer/master/assets/hana-spline.svg)

React wrapper for the `hana-viewer` web component.

This package exports:

- `HanaSplineViewer`

It wraps the custom element class from `lib/hana.js` using `@lit/react`.

---

## Install

```bash
bun add hana-viewer
```

Peer dependencies:

- `react` `>=18`
- `react-dom` `>=18`

---

## Quick start

```tsx
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

## Component API

### `HanaSplineViewer` props

- `url?: string | null`  
  URL of the `.hanacode` scene file exported from Spline.
- `width?: number`  
  Canvas width in pixels.
- `height?: number`  
  Canvas height in pixels.
- `loading?: "lazy" | "eager"`  
  Scene loading strategy.
- `unloadable?: boolean`  
  Enables automatic unloading when outside viewport.
- `eventsTarget?: "local" | "global"`  
  Mouse event target (`local` canvas or `global` window).
- `onLoaded?: () => void`  
  Callback fired once the scene has loaded.

---

## Notes

- The wrapper uses the `hana-viewer` custom element under the hood.
- Runtime behavior depends on `lib/hana.js`, which is included in the published package.
- Package entry points are provided through `exports` in `package.json`.
