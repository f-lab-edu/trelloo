import React, { ReactElement, ReactNode } from "react";
import { SEARCH_PARAMS_KEY } from "@/constants";
import { useNavigate, useSearchParams } from "react-router-dom";

function useFunnel<T>(initialStep?: T) {
  const [searchParams, setSearchParams] = useSearchParams(`${SEARCH_PARAMS_KEY.FUNNEL_STEPS}=${initialStep}`);
  const step = searchParams.get(SEARCH_PARAMS_KEY.FUNNEL_STEPS);
  const navigate = useNavigate();

  const handleStep = (step: T) => {
    searchParams.set(SEARCH_PARAMS_KEY.FUNNEL_STEPS, step as string);
    setSearchParams(searchParams);
  };

  const goBack = () => {
    navigate(-1);
  };

  const initializeStep = (searchParamsKey: string) => {
    searchParams.delete(searchParamsKey);
    searchParams.delete(SEARCH_PARAMS_KEY.FUNNEL_STEPS);
    setSearchParams(searchParams);
  };

  const Funnel = ({ children }: { children: ReactElement[] }) => {
    const targetStep = children.find((childStep: ReactElement) => childStep?.props?.name === step) ?? children[0];
    return <>{targetStep}</>;
  };

  const Step = ({ children, nextStep }: { children: ReactNode; name: T; nextStep?: T }) => {
    return <div onClick={() => nextStep && handleStep(nextStep)}>{children}</div>;
  };

  Funnel.Step = Step;

  return { Funnel, handleStep, goBack, initializeStep };
}

export default useFunnel;
