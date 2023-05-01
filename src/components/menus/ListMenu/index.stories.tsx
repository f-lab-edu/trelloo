import React from "react";
import ListMenu from "./index";

export default {
  title: "components/menus/ListMenu",
  component: ListMenu,
  argTypes: {
    onSubmit: "function",
  },
};

const Template = () => {
  const handleDeleteList = () => {};

  return <ListMenu onDeleteList={handleDeleteList} />;
};

export const Default = Template.bind({});
