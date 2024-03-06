import { amber, deepOrange } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode == "light"
      ? {
          primary: amber,
        }
      : {
          primary: deepOrange,
        }),
  },
});
