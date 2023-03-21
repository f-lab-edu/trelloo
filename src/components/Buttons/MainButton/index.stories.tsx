import React from "react";
import MainButton from "@components/Buttons/MainButton";

export default {
  title: "Common/MainButton",
  component: MainButton,
  argTypes: {
    isBlue: false,
  },
};

const Template = (args: { isBlue?: boolean }) => {
  return <MainButton />;
};

export const Primary = Template.bind({});
