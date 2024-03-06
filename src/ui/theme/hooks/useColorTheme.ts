import { PaletteMode, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "ui";

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  const modfiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );
  return {
    theme: modfiedTheme,
    mode,
    toggleColorMode,
  };
};
