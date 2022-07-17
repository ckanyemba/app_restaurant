import { useState } from "react";
import { Box } from "@mui/material";
//components
import AdminDrawer from "../components/AdminDrawer";
import { Toolbar } from "@mui/material";
// custom hooks
import { useSettings } from "../../@core/context/SettingsProvider";
const AdminLayout = () => {
  const { collapsed, open, toggleDrawer } = useSettings();
  const [SettingsOpen, setSettingsOpen] = useState<Boolean>(false);
  const handleSettingsToggle = () => {
    setSettingsOpen(!SettingsOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AdminDrawer
        collapsed={collapsed}
        onDrawerToggle={toggleDrawer}
        mobileOpen={open}
        onSettingsToggle={handleSettingsToggle}
      />
      <Box component="main" sx={{ flexGrow: 1, pb: 3, px: { xs: 3, sm: 6 } }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default AdminLayout;
