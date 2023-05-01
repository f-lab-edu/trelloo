import React from "react";
import CardEditorButtons from "@components/CardEditorButtons";

export default {
  title: "components/buttons/CardEditorButtons",
  component: CardEditorButtons,
};

const Template = () => {
  const handleDeleteCard = () => {};
  return <CardEditorButtons onDeleteCard={handleDeleteCard} />;
};

export const Default = Template.bind({});
