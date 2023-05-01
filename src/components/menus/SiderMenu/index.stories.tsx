import React from "react";
import SiderMenu from "./index";

export default {
  title: "Components/menus",
  component: SiderMenu,
  argTypes: {
    onSubmit: "function",
  },
};

const Template = () => {
  return <SiderMenu />;
};

export const Sider = Template.bind({});
