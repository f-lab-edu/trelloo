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
  const handleDeleteList = () => {};
  const handleEditList = async () => {};

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
              index: 0,
            },
          ],
        }}
        onDeleteList={handleDeleteList}
        onEditList={handleEditList}
      />
    </Provider>
  );
};
export const Primary = Template.bind({});
