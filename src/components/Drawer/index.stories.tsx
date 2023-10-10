import React from "react";
import Drawer from "@components/Drawer";
import DrawerProvider from "@components/providers/DrawerProvider";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "components/Drawer",
  component: Drawer,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/board",
    },
  },
};

const Template = () => {
  return (
    <DrawerProvider>
      <Drawer />
    </DrawerProvider>
  );
};

export const Default = Template.bind({});
