import React from "react";
import CardListComposer from "@components/CardListComposer";
import { AddListRequest } from "@/queries/cards/interface";

export default {
  title: "Components/forms",
  component: CardListComposer,
};

const Template = () => {
  const handleAddList = async ({ title }: AddListRequest) => {};

  return <CardListComposer onAddList={handleAddList} />;
};

export const CardListComposerComponent = Template.bind({});
