import React from "react";
import FilterMenu from "./index";

export default {
  title: "Components/menus",
  component: FilterMenu,
  argTypes: {
    onSubmit: "function",
  },
};

const Template = () => {
  const handleClick = () => {};

  return <FilterMenu onClick={handleClick} />;
};

export const Primary = Template.bind({});