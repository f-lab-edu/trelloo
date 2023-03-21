import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "@/store";
import Modal from "@components/Modals/Modal";
import useModal from "@/hooks/useModal";
import { MODAL_TYPE } from "@/constants";
export default {
  title: "Common/ModalContainer",
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
      props: { title: "modal container" },
    });
  };

  return <button onClick={onClickButton}>open modal</button>;
};

const Template = (args: { isBlue?: boolean }) => {
  return (
    <Provider store={store}>
      <ModalButton />
      {/* <Modal /> */}
    </Provider>
  );
};

export const Primary = Template.bind({});
