import React, { useState, MouseEvent, KeyboardEvent } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  HiOutlineMenu,
  HiOutlineChevronLeft,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineUser,
} from "react-icons/hi";

type Anchor = "top" | "left" | "right" | "bottom";
interface Props {
  anchorProps: Anchor;
  toggleDrawer: (
    anchor: Anchor,
    open: Boolean
  ) => (event: MouseEvent | KeyboardEvent) => void;
  state: any;
}

export default function DrawerComponent({
  anchorProps,
  toggleDrawer,
  state,
}: Props) {
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HiOutlineBell />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HiOutlineBell />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
}

{
  /* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} /> */
}

// <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
