import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { errorHandlers } from "./handleError";

interface Props {
  children: React.ReactNode;
}

function QueryErrorHandler({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: (err: unknown) => {
          const error = err as Error;
          errorHandlers[error.message]();
        },
      },
      mutations: {
        onError: (err: unknown) => {
          const error = err as Error;
          errorHandlers[error.message]();
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}

export default QueryErrorHandler;
