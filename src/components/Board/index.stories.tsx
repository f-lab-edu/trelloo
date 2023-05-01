import React from "react";
import Board from "@components/Board";

export default {
  title: "Components/Board",
  component: Board,
};

const Template = () => {
  return <Board searchKeyword="s" />;
};

export const Default = Template.bind({});
