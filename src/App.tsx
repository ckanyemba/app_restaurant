import { useState, ReactNode, Suspense } from "react";
import logo from "./logo.svg";
// import "./App.css";
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import { Test } from "./components/test";
import { HomePage } from "./screens/home";
import { TestPage } from "./screens/pagetest";
import { NavProvider } from "./Context/navbar.context";
import AuthProvider from "./auth/context/atuhProvider";
import AppRoutes from "./AppRoute";
import SnackbarProvider from "./@core/context/SnackbarProvider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback>
        <SnackbarProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </SnackbarProvider>
      </Suspense>
    </>
  );
}

export default App;

// <>
//   <NavProvider>
//     <Routes>
//       {/* <Route path="/" element={<HomePage />} /> */}
//     </Routes>
//   </NavProvider>
// </>
