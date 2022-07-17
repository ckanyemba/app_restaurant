import {
  Box,
  CssBaseline,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  styled,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { useState } from "react";

import { HiOutlineMenu, HiOutlineChevronLeft } from "react-icons/hi";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props {
  open: boolean;
  handleDrawerOpen: () => void;
}

let drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (props) => props !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const PersistenceDrawer = ({ open, handleDrawerOpen }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <HiOutlineChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
      </Drawer>
    </Box>
  );
};
export default PersistenceDrawer;
{
  /* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <HiOutlineMenu />
          </IconButton>
        </Toolbar>
      </AppBar> */
}
