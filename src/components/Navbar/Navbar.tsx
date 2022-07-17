import {
  HiOutlineMenu,
  HiOutlineChevronLeft,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  styled,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { useState, MouseEvent, KeyboardEvent } from "react";
import PersistenceDrawer from "../Navigation/drawer-persistence";

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: " 240px",
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type Anchor = "top" | "left" | "right" | "bottom";

const Navbar = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
  });
  const [Open, setOpen] = useState<boolean>(false);
  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" open={false}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <HiOutlineMenu />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  ...(Open && { sm: "none" }),
                },
              }}
            >
              ADMIN FOOD
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" aria-label="show mails" color="inherit">
                <Badge badgeContent={2} color="error">
                  <HiOutlineMail />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={20} color="error">
                  <HiOutlineBell />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account profile"
                color="inherit"
              >
                <HiOutlineUser />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <PersistenceDrawer handleDrawerOpen={handleDrawerOpen} open={Open} />
    </>
  );
};

export default Navbar;
