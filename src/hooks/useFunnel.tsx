import React, { ReactElement, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

function useFunnel<T>(initialStep: T) {
  const [step, setStep] = useState<T>(initialStep);

  const handleStep = (step: T) => {
    setStep(step);
  };

  const Funnel = ({ children }: { children: ReactElement[] }) => {
    const targetStep = children.find((childStep: ReactElement) => childStep?.props?.name === step);
    return <>{targetStep}</>;
  };

  const Step = ({ children, nextStep }: Props & { name: string; nextStep?: T }) => {
    return <div onClick={() => nextStep && setStep(nextStep)}>{children}</div>;
  };

  return { Funnel, Step, handleStep };
}

export default useFunnel;
