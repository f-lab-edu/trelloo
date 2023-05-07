import React from "react";
import FilterMenu from "./index";

export default {
  title: "components/menus",
  component: FilterMenu,
};

const Template = () => {
  const handleClick = () => {};

  return <FilterMenu onClick={handleClick} />;
};

export const Primary = Template.bind({});
