import React from "react";
import loadable from "@loadable/component";
const InviteToWorkspaceModal = loadable(async () => await import("@components/modals/InviteToWorkspaceModal"));

export default {
  title: "Components/modals",
  component: InviteToWorkspaceModal,
};

const Template = () => {
  const onClose = () => {};
  return <InviteToWorkspaceModal onClose={onClose} />;
};

export const InviteToWorkspace = Template.bind({});
