import React from "react";
import BoardPage from "@/pages/BoardPage";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Pages/BoardPage",
  component: BoardPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/board",
    },
  },
};

const Template = () => {
  return <BoardPage />;
};

export const Default = Template.bind({});
