import React from "react";
import styled from "styled-components";
import Button from "@components/Buttons/Button";
import { StoryProvider } from "@/index.stories";

export default {
  title: "Common/MainButton",
  component: Button,
  argTypes: {},
};

const Template = (args: { isBlue?: boolean }) => {
  return (
    <StoryProvider>
      <Button />
    </StoryProvider>
  );
};

export const Primary = Template.bind({});
