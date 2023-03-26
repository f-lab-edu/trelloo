import React from "react";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
import { Props as CardDetailProps } from "@components/Modals/CardDetail";
import { ModalsProvider } from "@components/Modals/ModalsProvider/index.stories";
const CardDetail = loadable(() => import("@components/Modals/CardDetail"));

export default {
  title: "Components/Modals",
  component: CardDetail,
};

const ModalButton = () => {
  const { openModal } = useModal();

  const onClickButton = () => {
    openModal<CardDetailProps>({
      component: CardDetail,
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

export const CardDetailModal = Template.bind({});
