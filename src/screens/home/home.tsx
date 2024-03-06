import { Button, Container, Typography } from "@mui/material";
import { useProvider } from "app/Providers/hooks";
import { useUpdateChangeLanguage } from "system";
import { Box, SwitchMode, useThemeContext } from "ui";
import { PropertiesCategory } from "./partials";
export const HomeScreen = () => {
  const { mode, toggleColorMode } = useThemeContext();
  const { changeLanguage } = useUpdateChangeLanguage();
  console.log(mode);
  useProvider();
  return (
    <Container maxWidth="xl">
    <Box sx={{ color: "text.primary"}}>
      {/* ...{mode}...
      <Typography>{t("welecom")}</Typography>
      <Button onClick={() => changeLanguage("en")}>en</Button>
      <Button onClick={() => changeLanguage("fa")}>fa</Button>
      <Button>jp</Button>
      <SwitchMode onChange={toggleColorMode} /> */}
      <PropertiesCategory />
    </Box>
    </Container>
  );
};
