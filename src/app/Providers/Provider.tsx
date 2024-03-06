import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { router } from "routes";
import {
  CssBaseline,
  ThemeContextProvider,
  ThemeProvider,
  useThemeContext,
} from "ui";
import { useProvider } from "./hooks";

export const Provider = () => {
  const { theme } = useThemeContext();
  useProvider()
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};
