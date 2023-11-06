import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import BoardPage from "@/pages/BoardPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store";

export default {
  title: "Pages/BoardPage",
  component: BoardPage,
  argTypes: {},
};

const Template = () => {
  const client = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BoardPage />
      </QueryClientProvider>
    </Provider>
  );
};

export const Primary = Template.bind({});
