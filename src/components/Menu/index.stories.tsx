import React from "react";
import Menu from "./index";

export default {
  title: "Components/menus",
  component: Menu,
};

const Template = () => {
  const searchCards = () => {};
  const showDrawer = () => {};

  return <Menu searchCards={searchCards} boardName="boardName" showDrawer={showDrawer} />;
};

export const Primary = Template.bind({});
