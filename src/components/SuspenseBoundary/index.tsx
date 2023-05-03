import React, { Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

interface Props {
  children: React.ReactNode;
  Fallback: React.ComponentType;
  ErrorFallback: React.ComponentType<FallbackProps>;
}

function SuspenseBoundary({ children, Fallback, ErrorFallback }: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
          <Suspense fallback={<Fallback />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default SuspenseBoundary;
