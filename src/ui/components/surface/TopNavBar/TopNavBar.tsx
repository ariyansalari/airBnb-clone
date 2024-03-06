import { Avatar, Box, Container } from "ui";
import { LoginAndSignUpTopNav, TopNavItems } from "./partials";

export const TopNavBar = () => {
  return (
    <Container maxWidth="xl">
    <Box
      sx={{
        display: "flex",
        pt: 3,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Avatar
          sx={{
            borderRadius: 0,
            backgroundColor: "transparent",
            width: 102,
            height: 32,
          }}
          src="/images/airBnb.png"
        />
        <TopNavItems />
        <LoginAndSignUpTopNav />
      </Box>
      <Box >sdfadasdadsada</Box>
    </Box>
    </Container>
  );
};
