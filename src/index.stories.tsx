import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import ModalsProvider from "@components/modals/ModalsProvider";
import Modals from "@components/modals/Modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Template = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ModalsProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
            <Modals />
          </ThemeProvider>
        </ModalsProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export const StoryProvider = Template.bind({});
