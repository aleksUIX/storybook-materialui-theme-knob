import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import RetroWave from "../themes/RetroWave-theme";
import Garden from "../themes/Garden-theme";

export const themes = { Garden, RetroWave };
export const themeNames = Object.keys(themes);

export default function ThemeKnob({ children, themeName = "Garden" }) {
  const theme = Object.prototype.hasOwnProperty.call(themes, themeName) ? themes[themeName] : Garden;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
