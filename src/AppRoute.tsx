import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./@core/components/privateRoutes";

//Admin
const Admin = lazy(() => import("./admin/pages/admin"));
const Dashboard = lazy(() => import("./admin/pages/dashboard"));
const OrdersPage = lazy(() => import("./admin/pages/orders"));
//orders
const OrdersManagement = lazy(() => import("./orders/pages/ordersManagement"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/orders" element={<OrdersManagement />} />
    </Routes>
  );
};
export default AppRoutes;
