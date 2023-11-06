import React from "react";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
import { ModalsProvider } from "@components/modals/ModalsProvider/index.stories";
const InviteToWorkspaceModal = loadable(() => import("@components/modals/InviteToWorkspaceModal"));

export default {
  title: "Components/Modals",
  component: InviteToWorkspaceModal,
};

const ModalButton = () => {
  const { openModal } = useModal();

  const onClickButton = () => {
    openModal({
      component: "inviteToWorkspaceModal",
    });
  };

  return <button onClick={onClickButton}>open modal</button>;
};

const Template = () => {
  return (
    <ModalsProvider>
      <ModalButton />
    </ModalsProvider>
  );
};

export const CardDetail = Template.bind({});
