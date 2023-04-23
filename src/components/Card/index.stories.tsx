import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { type Props as CardProps } from "./index";

import Card from "@components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    text: "default",
  },
};

const Template = (args: CardProps) => {
  return (
    <Provider store={store}>
      <Card data={{ id: "cardId", description: "default" }} onEditCard={() => {}} onDeleteCard={() => {}} />
    </Provider>
  );
};

export const Primary = Template.bind({});
