import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { worker } from "./mocks/browser";
import ModalsProvider from "@components/modals/ModalsProvider";
import QueryErrorHandler from "@components/QueryErrorHandler";
import App from "./App";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  worker.start();
}

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <QueryErrorHandler>
        <ModalsProvider>
          <GlobalStyle />
          <App />
          <ToastContainer position="bottom-left" theme="dark" autoClose={1500} hideProgressBar={true} limit={1} />
        </ModalsProvider>
      </QueryErrorHandler>
    </ThemeProvider>
  </Provider>,
);
