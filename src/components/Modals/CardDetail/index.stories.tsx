import React from "react";
import useModal from "@/hooks/useModal";
import { Props as CardDetailProps } from "@components/Modals/CardDetail";
import CardDetail from "@components/Modals/CardDetail";
import { ModalProvider } from "@components/Modals/ModalsProvider/index.stories";

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
    <ModalProvider>
      <ModalButton />
    </ModalProvider>
  );
};

export const CardDetailModal = Template.bind({});
