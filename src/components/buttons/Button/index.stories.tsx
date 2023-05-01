import React from "react";
import Button from "./index";

export default {
  title: "common/buttons/Button",
  component: Button,
};

const Template = () => {
  return <Button appearance={{ type: "gray" }}>Button</Button>;
};

export const Default = Template.bind({});
