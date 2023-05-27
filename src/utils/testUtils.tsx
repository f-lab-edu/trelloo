import { store } from "@/store";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import ModalsProvider from "@components/modals/ModalsProvider";
import { QueryClient, QueryClientProvider, UseQueryResult } from "@tanstack/react-query";
import { render, renderHook, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ModalsProvider>{children}</ModalsProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: TestProviders, ...options });

const createQueryClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export const createMockedQuery = (hook: () => UseQueryResult<any, unknown>) => {
  return renderHook(() => hook(), { wrapper: createQueryClientWrapper });
};

export * from "@testing-library/react";
export { customRender };
