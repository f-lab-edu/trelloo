import React from "react";
import loadable from "@loadable/component";
import styled from "styled-components";
import useModal from "@/hooks/useModal";
import { ModalProvider } from "@components/Modals/ModalsProvider/index.stories";
import { Props as CardEditProps } from "./index";
const CardEdit = loadable(() => import("@components/Modals/CardEdit"));

export default {
  title: "Components/Modals",
  component: CardEdit,
};

const ModalButton = () => {
  const { openModal } = useModal();

  const onClickButton = () => {
    openModal<CardEditProps>({
      component: CardEdit,
      props: { text: "card edit modal" },
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

export const CardEditModal = Template.bind({});