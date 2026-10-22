import React from "react";
import ThemeKnob, { themeNames } from "../src/stories/ThemeKnob";

export default {
  globalTypes: {
    theme: {
      description: "Material UI theme",
      toolbar: { title: "Theme", icon: "paintbrush", items: themeNames, dynamicTitle: true },
    },
  },
  initialGlobals: { theme: "Garden" },
  decorators: [(Story, context) => (
    <ThemeKnob themeName={context.globals.theme}><Story /></ThemeKnob>
  )],
};
