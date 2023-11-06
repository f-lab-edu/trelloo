import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Props as CardProps } from "./index";
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
      <Card data={{ id: "cardId", text: "default" }} />
    </Provider>
  );
};

export const Primary = Template.bind({});
