import React from "react";
import CardListComposer from "@components/CardListComposer";
import { AddListRequest } from "@/queries/cards/interface";
import styled from "styled-components";

export default {
  title: "Components/forms/CardListComposer",
  component: CardListComposer,
};

const Template = () => {
  const handleAddList = async ({ title }: AddListRequest) => {};

  return (
    <Container>
      <CardListComposer onAddList={handleAddList} />
    </Container>
  );
};

export const Default = Template.bind({});

const Container = styled.div`
  width: 300px;
`;
