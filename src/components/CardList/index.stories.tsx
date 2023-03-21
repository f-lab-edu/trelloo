import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "@/store";
import CardList from "@components/CardList";

export default {
  title: "Components/CardList",
  component: CardList,
  argTypes: {
    title: "title",
    cards: [{ text: "text" }],
  },
};

const Template = (args: { text: string }) => {
  return (
    <Provider store={store}>
      <CardList
        cardList={{
          title: "title",
          cards: [{ text: "text" }],
        }}
      />
    </Provider>
  );
};

export const Primary = Template.bind({});
