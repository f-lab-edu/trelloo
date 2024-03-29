import React from "react";
import ReactModal from "react-modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../src/store";
import { theme } from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { worker } from "../src/mocks/browser";

worker.start();
const queryClient = new QueryClient();
ReactModal.setAppElement("#root");

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
