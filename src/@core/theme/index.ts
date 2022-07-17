import { createTheme as createMuiTheme } from "@mui/material";
import { darkPalette, lightPalette } from "./palette";
import mixins from "./mixin";
import shape from "./shape";
import transitions from "./transitions";
import typography from "./typographi";
import { createThemeComponents } from "./component";

export const createTheme = (
  direction: "ltr" | "rtl",
  mode: "dark" | "light",
) => {
  const palette = mode == "dark" ? darkPalette : lightPalette;
  const baseTheme = createMuiTheme({
    direction,
    mixins,
    palette,
    shape,
    transitions,
    typography,
  });
  // Inject base theme to be used in components
  return createMuiTheme(
    {
      components: createThemeComponents(baseTheme),
    },
    baseTheme,
  );
};
