import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "ui";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
export const ProfileTopNav = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        border: `1px solid #DDDDDD`,
        gap: (theme) => theme.spacing(1.75),
        alignItems: "center",
        borderRadius: (theme) => theme.spacing(3.75),
        pr: 1,
        pl: 2,
        py: 1,
      }}
    >
      <Button
      variant="text"
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ cursor: "pointer",color:"inherit",p:0,m:0,minWidth:14   }}
      >
        <MenuIcon />
      </Button>
      <Avatar sx={{ width: 30, height: 30 }} src="/images/avatar.png" />

      <Popper
      sx={{inset:`2vh auto auto -18vh !important`}}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
         
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem        sx={{pr:20}}>Sign up</MenuItem>
                  <MenuItem>Login</MenuItem>
                  <Divider/>
                  <MenuItem>Gift cards</MenuItem>
                  <MenuItem>Airbnb your home</MenuItem>

                  <MenuItem>Help Center</MenuItem>

                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};
