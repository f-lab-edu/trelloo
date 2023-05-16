import React from "react";
import loadable from "@loadable/component";
const Component = loadable(() => import("@components/modals/components/CardDetailModal"));

export default {
  title: "components/modals/CardDetailModal",
  component: Component,
};

const Template = () => {
  return <Component title="title" onClose={() => {}} />;
};

export const Default = Template.bind({});
