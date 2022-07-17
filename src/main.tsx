import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SettingsProvider from "./@core/context/SettingsProvider";
// const client = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <QueryClientProvider client={client}>
//       <ReactQueryDevtools />
//       <ThemeProvider theme={theme}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ThemeProvider>
//     </QueryClientProvider>
//   </React.StrictMode>,
// );

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      suspense: true,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
