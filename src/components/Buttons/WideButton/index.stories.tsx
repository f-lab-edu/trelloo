import React from "react";
import { ComponentStory } from "@storybook/react";
import WideButton from "@components/Buttons/WideButton";
import { AiOutlinePlus } from "react-icons/ai";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

export default {
  title: "Common/WideButton",
  component: WideButton,
};

const Template: ComponentStory<typeof WideButton> = (args) => (
  <ThemeProvider theme={theme}>
    <WideButton {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  text: "Add a card",
  icon: <AiOutlinePlus />,
};
