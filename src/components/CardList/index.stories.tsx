import React from "react";
import { Provider } from "react-redux";
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
      <CardList
        data={{
          id: "string",
          title: "string",
          cards: [
            {
              id: "string",
              description: "string",
            },
          ],
        }}
        onDeleteList={() => {}}
        onEditList={() => {}}
      />
    </Provider>
  );
};
export const Primary = Template.bind({});
