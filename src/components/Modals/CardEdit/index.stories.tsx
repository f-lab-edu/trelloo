import React from "react";
import styled from "styled-components";
import useModal from "@/hooks/useModal";
import CardEdit, { Props as CardEditProps } from "./index";
import { ModalTemplate } from "@/templateStories/ModalTemplate/index.stories";

export default {
  title: "Components/Modals",
  component: CardEdit,
};

const ModalButton = () => {
  const { openModal } = useModal<CardEditProps>();

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
    <ModalTemplate>
      <ModalButton />
    </ModalTemplate>
  );
};

export const CardEditModal = Template.bind({});
