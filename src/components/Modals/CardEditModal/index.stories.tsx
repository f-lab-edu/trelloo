import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "@/store";
import ModalContainer from "@components/Modals/ModalContainer";
import Modal from "@components/Modals/CardEditModal";
import useModal from "@/hooks/useModal";
import { MODAL_TYPE } from "@/constants";

export default {
  title: "Components/Modals",
  component: Modal,
  argTypes: {
    isBlue: false,
  },
};

const ModalButton = () => {
  const { openModal } = useModal();

  const onClickButton = () => {
    openModal({
      type: MODAL_TYPE.CARD_DETAIL,
      props: { title: "card edit modal" },
    });
  };

  return <button onClick={onClickButton}>open modal</button>;
};

const Template = () => {
  return (
    <>
      <Provider store={store}>
        <ModalButton />
        <ModalContainer />
      </Provider>
    </>
  );
};

export const CardEditModal = Template.bind({});
