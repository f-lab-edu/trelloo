import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { worker } from "./mocks/browser";
import ModalsProvider from "@components/modals/ModalsProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { handleError, handleThrowError } from "@utils/handleError";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  worker.start();
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError(err) {
        if (err instanceof Error) {
          handleError(err.message);
        }
      },
      onSuccess(data) {
        const response = data as { code: number };
        if (response?.code) {
          handleThrowError(response?.code);
        }
      },
    },
    mutations: {
      onError(err) {
        if (err instanceof Error) {
          handleError(err.message);
        }
      },
      onSuccess(data) {
        const response = data as { code: number };
        if (response?.code) {
          handleThrowError(response?.code);
        }
      },
    },
  },
});
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalsProvider>
          <GlobalStyle />
          <App />
          <ToastContainer position="bottom-left" theme="dark" autoClose={1500} hideProgressBar={true} limit={1} />
        </ModalsProvider>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>,
);
