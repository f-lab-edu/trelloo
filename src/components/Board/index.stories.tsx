import React from "react";
import Board from "@components/Board";

export default {
  title: "components/Board",
  component: Board,
};

const Template = () => {
  return <Board searchKeyword="" />;
};

export const Default = Template.bind({});
