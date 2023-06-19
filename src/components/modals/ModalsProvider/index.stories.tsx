import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import ModalsProviderComponent from "@components/modals/ModalsProvider";
import Modals from "@components/Modals";

interface Props {
  children: React.ReactNode;
}

const Template = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ModalsProviderComponent>
        {children}
        <Modals />
      </ModalsProviderComponent>
    </Provider>
  );
};

export const ModalsProvider = Template.bind({});
