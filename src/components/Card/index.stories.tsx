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
  const handleEditCard = async () => {};
  const handleDeleteCard = () => {};

  return (
    <Provider store={store}>
      <Card
        data={{ id: "cardId", description: "default", index: 0 }}
        onEditCard={handleEditCard}
        onDeleteCard={handleDeleteCard}
      />
    </Provider>
  );
};

export const Primary = Template.bind({});
