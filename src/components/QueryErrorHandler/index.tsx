import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function QueryErrorHandler({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: (err: unknown) => {
          console.log(err, " default on error");
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
