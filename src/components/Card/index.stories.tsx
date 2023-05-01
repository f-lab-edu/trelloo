import React from "react";
import Card from "@components/Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = () => {
  const handleEditCard = async () => {};
  const handleDeleteCard = () => {};

  return (
    <Card
      data={{ id: "cardId", description: "default", index: 0 }}
      onEditCard={handleEditCard}
      onDeleteCard={handleDeleteCard}
    />
  );
};

export const Primary = Template.bind({});
