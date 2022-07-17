import { Grid } from "@mui/material";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import OverviewWidget from "../widgets/overviewWidget";
import ViewWidget from "../widgets/viewsWidget";
const overviewItems = [
  {
    unit: "visits",
    value: "20 700",
  },
  {
    unit: "sales",
    value: "$ 1 550",
  },
  {
    unit: "orders",
    value: "149",
  },
  {
    unit: "users",
    value: "657",
  },
];

const Dashboard = () => {
  return (
    <>
      <AdminAppBar>
        <AdminToolbar title="admin dashboard" />
      </AdminAppBar>
      <Grid container spacing={2}>
        {overviewItems.map((item, index) => (
          <Grid key={index} item xs={6} md={3}>
            <OverviewWidget description={item.unit} title={item.value} />
          </Grid>
        ))}
        <Grid item xs={12} md={8}>
          {/* <ActivityWidget /> */}
        </Grid>
      </Grid>
      <ViewWidget />
    </>
  );
};

export default Dashboard;
