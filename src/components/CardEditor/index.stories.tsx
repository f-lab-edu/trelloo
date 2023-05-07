import React from "react";
import CardEditor from "@components/CardEditor";

export default {
  title: "Components/Cards",
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
export const InviteToWorkspaceModal = Template.bind({});
