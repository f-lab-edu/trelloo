import React from "react";
import CardList from "@components/CardList";
import { customRender, fireEvent } from "@utils/testUtils";
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

  const setup = () => {
    const { getByText, getByPlaceholderText } = customRender(
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

    const card = getByText("card");
    const list = getByText("list title");
    const cardInputToggleButton = getByText("Add a card");
    return { getByText, getByPlaceholderText, card, list, cardInputToggleButton };
  };

  it("카드와 카드 목록, Add a card 버튼 렌더링", () => {
    const { card, list, cardInputToggleButton } = setup();
    expect(card).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(cardInputToggleButton).toBeInTheDocument();
  });

  it("Add a card 버튼 클릭 시 카드 인풋창과 Add card 버튼 렌더링", () => {
    const { getByText, getByPlaceholderText, cardInputToggleButton } = setup();
    fireEvent.click(cardInputToggleButton);
    const addCardButton = getByText("Add card");
    const cardInput = getByPlaceholderText("Enter a title for this card...");
    expect(addCardButton).toBeInTheDocument();
    expect(cardInput).toBeInTheDocument();
  });
});
