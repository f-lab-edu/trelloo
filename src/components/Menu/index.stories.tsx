import React from "react";
import Menu from "./index";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "components/menus",
  component: Menu,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/board",
    },
  },
};

const Template = () => {
  const searchCards = () => {};

  return <Menu searchCards={searchCards} boardName="boardName" />;
};

export const Primary = Template.bind({});
