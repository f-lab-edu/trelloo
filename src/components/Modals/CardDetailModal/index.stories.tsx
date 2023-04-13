import React from "react";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
import { Props as CardDetailProps } from "@components/modals/CardDetailModal";
import { ModalsProvider } from "@components/modals/ModalsProvider/index.stories";
const CardDetailModal = loadable(() => import("@components/modals/CardDetailModal"));

export default {
  title: "Components/Modals",
  component: CardDetailModal,
};

const ModalButton = () => {
  const { openModal } = useModal();

  const onClickButton = () => {
    openModal({
      component: CardDetailModal,
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
