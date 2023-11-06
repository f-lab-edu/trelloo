import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "@/store";
import Modal from "@components/Modals/CardEditModal";
import useModal from "@/hooks/useModal";
import CardDetail from "@components/Modals/CardDetailModal";
import Modals from "@components/Modals/Modals";
import ModalsProvider from "@components/Modals/ModalsProvider";

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
      component: CardDetail,
      props: { title: "card edit modal" },
    });
  };

  return <button onClick={onClickButton}>open modal</button>;
};

const Template = () => {
  return (
    <>
      <Provider store={store}>
        <ModalsProvider>
          <ModalButton />
          <Modals />
        </ModalsProvider>
      </Provider>
    </>
  );
};

export const CardEditModal = Template.bind({});
