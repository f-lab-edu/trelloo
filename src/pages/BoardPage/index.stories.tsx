import React from "react";
import BoardPage from "@/pages/BoardPage";
import { StoryProvider } from "@/index.stories";

export default {
  title: "Pages/BoardPage",
  component: BoardPage,
  argTypes: {},
};

const Template = () => {
  return (
    <StoryProvider>
      <BoardPage />
    </StoryProvider>
  );
};

export const Primary = Template.bind({});
