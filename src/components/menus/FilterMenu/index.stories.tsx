import React from "react";
import FilterMenu from "./index";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "components/menus",
  component: FilterMenu,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/board",
    },
  },
};

const Template = () => {
  const handleClick = () => {};

  return <FilterMenu onClick={handleClick} />;
};

export const Primary = Template.bind({});
