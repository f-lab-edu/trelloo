import React from "react";
import CardList from "@components/CardList";
import { customRender, screen } from "@utils/testUtils";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { describe, vi } from "vitest";

describe("CardListComposer 테스트", () => {
  const handleEditList = vi.fn();
  const handleDeleteList = vi.fn();
  const handleDragEnd = vi.fn();

  const cardList = {
    id: "",
    title: "list title",
    cards: [
      {
        id: "",
        description: "card",
        index: 0,
      },
    ],
  };

  beforeEach(() => {
    customRender(
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cardlistId">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <CardList data={cardList} onEditList={handleEditList} onDeleteList={handleDeleteList} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>,
    );
  });

  it("render test", () => {
    expect(screen.getByText("card")).toBeInTheDocument();
    expect(screen.getByText("list title")).toBeInTheDocument();
  });
});
