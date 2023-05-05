import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import LoginPage from ".";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/board",
    },
  },
};

const Template = () => {
  return <LoginPage />;
};

export const Default = Template.bind({});
