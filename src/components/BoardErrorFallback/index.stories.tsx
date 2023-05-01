import React from "react";
import BoardErrorFallback from "@components/BoardErrorFallback";

export default {
  title: "common/fallbacks/BoardErrorFallback",
  component: BoardErrorFallback,
};

const Template = () => {
  const handleQueryErrorReset = () => {};
  return <BoardErrorFallback onQueryErrorReset={handleQueryErrorReset} />;
};

export const NoData = Template.bind({});
