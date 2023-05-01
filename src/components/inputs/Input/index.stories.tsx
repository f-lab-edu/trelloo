import React from "react";
import Component from "./index";

export default {
  title: "common/inputs/Input",
  component: Component,
  argTypes: {
    onSubmit: "function",
  },
};

const Template = () => {
  const handleSubmit = () => {};

  return <Component onSubmit={handleSubmit} placeHolder="Enter new keyword..." name="input" />;
};

export const Input = Template.bind({});
