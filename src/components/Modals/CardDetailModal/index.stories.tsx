import React from "react";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
import { ModalsProvider } from "@components/modals/ModalsProvider/index.stories";
const CardDetailModal = loadable(async () => await import("@components/modals/CardDetailModal"));

export default {
  title: "Components/Modals",
  component: CardDetailModal,
};

const ModalButton = () => {
  const { openModal } = useModal();

  const onClickButton = () => {
    openModal({
      component: "cardDetailModal",
      props: { title: "card detail modal" },
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
