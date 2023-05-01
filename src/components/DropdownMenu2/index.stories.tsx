import React from "react";
import DropdownMenu2 from "./index";

export default {
  title: "Components/menus",
  component: DropdownMenu2,
};

const Template = () => {
  const searchCards = () => {};
  return <DropdownMenu2 searchCards={searchCards} />;
};

export const DropdownMenu2Component = Template.bind({});
