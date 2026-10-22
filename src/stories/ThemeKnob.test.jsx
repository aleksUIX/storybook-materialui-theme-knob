import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { useTheme } from "@material-ui/core/styles";
import ThemeKnob, { themes } from "./ThemeKnob";
import { BasicControls } from "./2-Material-ui.stories";

function ThemeColor() {
  const theme = useTheme();
  return <output aria-label="Primary theme color">{theme.palette.primary.main}</output>;
}

test("switches theme while preserving the interactive controls", () => {
  const content = <><ThemeColor /><BasicControls /></>;
  const view = render(<ThemeKnob themeName="Garden">{content}</ThemeKnob>);
  expect(view.getByLabelText("Primary theme color")).toHaveTextContent(themes.Garden.palette.primary.main);
  const checkbox = view.getByRole("checkbox", { name: "primary checkbox" });
  fireEvent.click(checkbox);
  fireEvent.change(view.getByLabelText("Age", { selector: "#age-native-simple" }), { target: { value: "20" } });
  expect(checkbox).not.toBeChecked();
  view.rerender(<ThemeKnob themeName="RetroWave">{content}</ThemeKnob>);
  expect(view.getByLabelText("Primary theme color")).toHaveTextContent(themes.RetroWave.palette.primary.main);
  expect(checkbox).not.toBeChecked();
  expect(view.getByLabelText("Age", { selector: "#age-native-simple" })).toHaveValue("20");
});

test.each(["unknown", "constructor", "__proto__"])("falls back to Garden for saved toolbar value %s", (themeName) => {
  const view = render(<ThemeKnob themeName={themeName}><ThemeColor /></ThemeKnob>);
  expect(view.getByLabelText("Primary theme color")).toHaveTextContent(themes.Garden.palette.primary.main);
});
