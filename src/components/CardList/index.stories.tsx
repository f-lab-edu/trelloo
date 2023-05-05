import React from "react";
import CardList from "@components/CardList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default {
  title: "components/CardList",
  component: CardList,
};

const Template = () => {
  const handleDeleteList = () => {};
  const handleEditList = async () => {};
  const handleDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="cardList">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export const Default = Template.bind({});
