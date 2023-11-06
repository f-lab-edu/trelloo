import React, { useState } from "react";
import styled from "styled-components";
import Header from "@components/Header";
import { StoryProvider } from "@/index.stories";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    isBlue: false,
  },
};

const Template = (args: { isBlue?: boolean }) => {
  return (
    <StoryProvider>
      <Header />
    </StoryProvider>
  );
};

export const Primary = Template.bind({});
