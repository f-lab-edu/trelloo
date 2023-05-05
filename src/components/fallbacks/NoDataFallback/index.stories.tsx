import React from "react";
import NoDataFallback from "@components/fallbacks/NoDataFallback";

export default {
  title: "common/fallbacks/NoDataFallback",
  component: NoDataFallback,
};

const Template = () => {
  const resetErrorBoundary = () => {};
  return <NoDataFallback resetErrorBoundary={resetErrorBoundary} />;
};

export const Default = Template.bind({});
