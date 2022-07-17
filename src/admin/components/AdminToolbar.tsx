import { Toolbar, IconButton, Typography } from "@mui/material";
import { BiMenu } from "react-icons/bi";
import { ReactNode } from "react";
import { useSettings } from "../../@core/context/SettingsProvider";
type AdminToolbarProps = {
  children?: ReactNode;
  title?: string;
};

const AdminToolbar = ({ children, title }: AdminToolbarProps) => {
  const { toggleDrawer } = useSettings();
  return (
    <Toolbar sx={{ px: { xs: 3, sm: 6 } }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        sx={{
          display: { lg: "none" },
          marginRight: 2,
        }}
      >
        <BiMenu />
      </IconButton>
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      {children}
    </Toolbar>
  );
};
export default AdminToolbar;
