import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Modal from "@components/Modals/CardDetailModal";
import useModal from "@/hooks/useModal";
import CardDetail from "@components/Modals/CardDetailModal";
import ModalsProvider from "@components/Modals/ModalsProvider";
import Modals from "@components/Modals/Modals";

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
      props: { title: "card detail modal" },
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

export const CardDetailModal = Template.bind({});
