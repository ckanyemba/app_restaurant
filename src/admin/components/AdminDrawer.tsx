import {
  Box,
  List,
  ListItemText,
  ListItem,
  Drawer,
  Avatar,
  ListItemAvatar,
  Collapse,
} from "@mui/material";
import { HiOutlineHome } from "react-icons/hi";
import { RiBarChartLine } from "react-icons/ri";
import { FiUsers, FiHelpCircle, FiUser, FiSettings } from "react-icons/fi";
import { useAuth } from "../../auth/context/atuhProvider";
import { drawerCollapsedWidth, drawerWidth } from "../../@core/config/layout";
import { NavLink, Link } from "react-router-dom";
import { ComponentCollapse } from "../components/Submenu";

type AdminDrawerProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  onSettingsToggle: () => void;
};

export const menuItems = [
  {
    icon: <HiOutlineHome />,
    // key: "admin.drawer.menu.home",
    key: "home",
    path: "/admin",
  },
  {
    icon: <RiBarChartLine />,
    // key: "admin.drawer.menu.dashboard",
    key: "dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <RiBarChartLine />,
    // key: "admin.drawer.menu.dashboard",
    key: "Orders",
    path: "/admin/orders",
  },
  {
    icon: <FiUsers />,
    // key: "admin.drawer.menu.userManagement",
    key: "User Managemt",
    path: "/admin/user-management",
    submenu: true,
    menu: [
      {
        icon: <FiUsers />,
        key: "Add Product",
      },
      {
        icon: <FiUsers />,
        key: "Add Product",
      },
    ],
  },
  {
    icon: <FiHelpCircle />,
    key: "Help",
    path: "/admin/help",
  },
];

const AdminDrawer = ({
  collapsed,
  mobileOpen,
  onDrawerToggle,
  onSettingsToggle,
}: AdminDrawerProps) => {
  const { userInfo } = useAuth();

  const width = collapsed ? drawerCollapsedWidth : drawerWidth;

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <List component="nav" sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <>
            <ListItem
              button
              key={item.path}
              component={(props) => <Link {...props} to={item.path} />}
            >
              <ListItemAvatar>
                <Avatar sx={{ color: "inherit", bgcolor: "transparent" }}>
                  {item.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.key}
                sx={{
                  display: collapsed ? "none" : "block",
                }}
              />
            </ListItem>
            {item.submenu && (
              <>
                <Collapse in={true}>
                  <List component="nav" sx={{ pl: 5 }}>
                    {item.menu.map((e) => (
                      <ComponentCollapse open={true} />
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List component="nav" sx={{ p: 2 }}>
        <ListItem
          button
          component={(props) => <Link {...props} to="/admin/profile" />}
        >
          <ListItemAvatar>
            <Avatar sx={{ color: "inherit", bgcolor: "transparent" }}>
              <FiUser />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Luis Zapata"}
            sx={{
              display: collapsed ? "none" : "block",
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar sx={{ color: "inherit", bgcolor: "transparent" }}>
              <FiSettings />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={"Settings"}
            sx={{
              display: collapsed ? "none" : "block",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      aria-label="Admin drawer"
      component="nav"
      sx={{
        width: { lg: width },
        flexShrink: { lg: 0 },
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default AdminDrawer;
