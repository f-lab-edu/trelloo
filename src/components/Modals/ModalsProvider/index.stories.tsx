import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import ModalsProvider from "@components/Modals/ModalsProvider";
import Modals from "@components/Modals/Modals";

interface Props {
  children: React.ReactNode;
}

const Template = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ModalsProvider>
        {children}
        <Modals />
      </ModalsProvider>
    </Provider>
  );
};

export const ModalProvider = Template.bind({});
