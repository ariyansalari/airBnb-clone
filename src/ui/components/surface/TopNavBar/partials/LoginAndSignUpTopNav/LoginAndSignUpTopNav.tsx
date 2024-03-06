import { Avatar, Box, Button } from "ui";
import { ProfileTopNav } from "./partials";

export const LoginAndSignUpTopNav = () => {
  return (
    <Box sx={{ display: "flex" ,alignItems:"center"}}>
      <Button
      variant="text"
        sx={{
          color: "#222222",
          fontWeight: 600,
          fontSize: 14,
          "&:hover": {
            backgroundColor: "#ebebeb",
            borderRadius: (theme) => theme.spacing(1.5),
          },
        }}
      >
        Airbnb your home
      </Button>
      <Avatar src="/assets/Svgs/internet.svg" />
      <ProfileTopNav />
    </Box>
  );
};
