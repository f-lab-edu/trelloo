import React from "react";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
import { ModalsProvider } from "@components/modals/ModalsProvider/index.stories";
const CardEdit = loadable(() => import("@components/modals/CardEditor"));

export default {
  title: "Components/Modals",
  component: CardEdit,
};

const ModalButton = () => {
  const { openModal } = useModal();

  const onClickButton = () => {
    openModal({
      component: CardEdit,
      props: { text: "card edit modal" },
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

export const CardEditModal = Template.bind({});
