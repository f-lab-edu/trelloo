import React from "react";
import ListMenu from "./index";

export default {
  title: "Components/menus",
  component: ListMenu,
  argTypes: {
    onSubmit: "function",
  },
};

const Template = () => {
  const handleDeleteList = () => {};

  return <ListMenu onDeleteList={handleDeleteList} />;
};

export const Primary = Template.bind({});
