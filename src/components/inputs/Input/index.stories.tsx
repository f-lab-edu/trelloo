import React from "react";
import Input from "./index";

export default {
  title: "Components/inputs",
  component: Input,
  argTypes: {
    onSubmit: "function",
  },
};

const Template = () => {
  const handleSubmit = () => {};

  return <Input onSubmit={handleSubmit} placeHolder="Enter new keyword..." name="input" />;
};

export const Primary = Template.bind({});
