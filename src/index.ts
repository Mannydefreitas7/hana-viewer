import { SplineViewer } from "../lib/hana.js";
import { createComponent } from "@lit/react";
import * as React from "react";

const HanaSplineViewer = createComponent({
  react: React,
  tagName: "hana-viewer",
  elementClass: SplineViewer,
  displayName: "SplineViewer",
});

export { HanaSplineViewer };
