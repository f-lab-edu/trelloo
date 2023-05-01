import React from "react";
import Card from "@components/Card";
import styled from "styled-components";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = () => {
  const handleEditCard = async () => {};
  const handleDeleteCard = () => {};

  return (
    <Container>
      <Card
        data={{ id: "cardId", description: "default", index: 0 }}
        onEditCard={handleEditCard}
        onDeleteCard={handleDeleteCard}
      />
    </Container>
  );
};

export const Default = Template.bind({});

const Container = styled.div`
  width: 300px;
`;
