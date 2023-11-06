import React from "react";
import CardEditor from "@components/CardEditor";

export default {
  title: "Components/Cards",
  component: CardEditor,
};

const Template = () => {
  const data = { id: "id", description: "description" };
  const onCardEditorClose = () => {};
  const setCardEditorOpened = () => {};
  const onEditCard = () => {};
  const onDeleteCard = () => {};

  return (
    <CardEditor
      data={data}
      onCardEditorClose={onCardEditorClose}
      setCardEditorOpened={setCardEditorOpened}
      onEditCard={onEditCard}
      onDeleteCard={onDeleteCard}
    />
  );
};
export const InviteToWorkspaceModal = Template.bind({});
