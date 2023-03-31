import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "@/store";
import Card from "@components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    text: "default",
  },
};

const Template = (args: { text: string }) => {
  return (
    <Provider store={store}>
      <Card data={{ text: "default" }} />
    </Provider>
  );
};

export const Primary = Template.bind({});
