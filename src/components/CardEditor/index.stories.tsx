import React from "react";
import CardEditor from "@components/CardEditor";

export default {
  title: "components/CardEditor",
  component: CardEditor,
};

const Template = () => {
  const data = { id: "id", description: "description", index: 0 };
  const handleCardEditorClose = () => {};
  const setCardEditorOpened = () => {};
  const handleEditCard = async () => {};
  const handleDeleteCard = () => {};

  return (
    <CardEditor
      data={data}
      onCardEditorClose={handleCardEditorClose}
      setCardEditorOpened={setCardEditorOpened}
      onEditCard={handleEditCard}
      onDeleteCard={handleDeleteCard}
    />
  );
};
export const Default = Template.bind({});
export const Default2 = Template.bind({});
