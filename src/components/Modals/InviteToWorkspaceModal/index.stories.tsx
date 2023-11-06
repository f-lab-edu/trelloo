import loadable from "@loadable/component";
const InviteToWorkspaceModal = loadable(() => import("@components/modals/InviteToWorkspaceModal"));

export default {
  title: "Components/Modals",
  component: InviteToWorkspaceModal,
};

const Template = () => {
  const onClose = () => {};
  return <InviteToWorkspaceModal onClose={onClose} />;
};

export const CardDetail = Template.bind({});
