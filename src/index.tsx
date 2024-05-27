import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import App from "./app";
import { store } from "./app/store";
import { Provider } from "react-redux";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssVarsProvider } from "@mui/material-next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <CssVarsProvider theme={...}> */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        {/* </CssVarsProvider> */}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
