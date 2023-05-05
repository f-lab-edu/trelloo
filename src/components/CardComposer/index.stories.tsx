import React, { useState } from "react";
import styled from "styled-components";
import CardComposer from "./index";

export default {
  title: "components/forms/CardComposer",
  component: CardComposer,
};

const Template = () => {
  const [isCardInputOpened, setIsCardInputOpened] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleAddCard = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleCardInputToggle = () => {
    setIsCardInputOpened(!isCardInputOpened);
  };

  return (
    <Container>
      <CardComposer
        isLoading={isLoading}
        isCardInputOpened={isCardInputOpened}
        onCardInputToggle={handleCardInputToggle}
        listId="id"
        onAddCard={handleAddCard}
      />
    </Container>
  );
};

export const Default = Template.bind({});

const Container = styled.div`
  width: 300px;
`;
