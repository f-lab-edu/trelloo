import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "@/store";
import CardList from "@components/CardList";

export default {
  title: "Components/CardList",
  component: CardList,
  argTypes: {
    text: "default",
  },
};

const Template = (args: { text: string }) => {
  return (
    <Provider store={store}>
      <CardList />
    </Provider>
  );
};

export const Primary = Template.bind({});