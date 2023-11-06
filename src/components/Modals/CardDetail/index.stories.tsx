import React from "react";
import Modal, { Props as CardDetailProps } from "@components/Modals/CardDetail";
import useModal from "@/hooks/useModal";
import CardDetail from "@components/Modals/CardDetail";
import { ModalTemplate } from "@/templateStories/ModalTemplate/index.stories";

export default {
  title: "Components/Modals",
  component: CardDetail,
};

const ModalButton = () => {
  const { openModal } = useModal<CardDetailProps>();

  const onClickButton = () => {
    openModal({
      component: CardDetail,
      props: { title: "card detail modal" },
    });
  };

  return <button onClick={onClickButton}>open modal</button>;
};

const Template = () => {
  return (
    <ModalTemplate>
      <ModalButton />
    </ModalTemplate>
  );
};

export const CardDetailModal = Template.bind({});
