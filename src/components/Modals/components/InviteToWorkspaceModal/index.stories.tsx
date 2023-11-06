import React from "react";
import loadable from "@loadable/component";
const InviteToWorkspaceModal = loadable(async () => await import("@components/modals/InviteToWorkspaceModal"));

export default {
  title: "components/modals/InviteToWorkspaceModal",
  component: InviteToWorkspaceModal,
};

const Template = () => {
  const onClose = () => {};
  return <InviteToWorkspaceModal onClose={onClose} />;
};

export const Default = Template.bind({});
