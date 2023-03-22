import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { worker } from "./mocks/browser";
import ModalsProvider from "@components/Modals/ModalsProvider";
import App from "./App";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const queryClient = new QueryClient();
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <ModalsProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </ModalsProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
