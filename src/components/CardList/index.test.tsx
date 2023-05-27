import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { describe, vi, expect } from "vitest";
import { createMockedQuery, customRender, fireEvent, waitFor } from "@utils/testUtils";
import { ICardList } from "@/interfaces/cards";
import CardList from "@components/CardList";
import { mockedCardList, mockedCardLists } from "@components/Board/mockData";

describe("CardListComposer 테스트", () => {
  const handleEditList = vi.fn();
  const handleDeleteList = vi.fn();
  const handleDragEnd = vi.fn();

  function useCardsQuery() {
    return useQuery({
      queryKey: ["cards"],
      queryFn: () => {
        return mockedCardLists;
      },
    });
  }

  const setup = (cardList: ICardList | undefined) => {
    const { getByText, getByPlaceholderText } = customRender(
      <DragDropContext onDragEnd={handleDragEnd} key={cardList?.id}>
        <Droppable droppableId="cardlistId">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cardList && <CardList data={cardList} onEditList={handleEditList} onDeleteList={handleDeleteList} />}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>,
    );

    return { getByText, getByPlaceholderText };
  };

  it("카드와 카드 목록, Add a card 버튼 렌더링", () => {
    const { getByText } = setup(mockedCardList);
    const cardInputToggleButton = getByText("Add a card");
    const card = getByText("card1");
    const list = getByText("list1");

    expect(card).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(cardInputToggleButton).toBeInTheDocument();
  });

  it("Add a card 버튼 클릭 시 카드 인풋창과 Add card 버튼 렌더링", () => {
    const { getByText, getByPlaceholderText } = setup(mockedCardList);
    const cardInputToggleButton = getByText("Add a card");

    fireEvent.click(cardInputToggleButton);
    const addCardButton = getByText("Add card");
    const cardInput = getByPlaceholderText("Enter a title for this card...");
    expect(addCardButton).toBeInTheDocument();
    expect(cardInput).toBeInTheDocument();
  });

  it("인풋창에 텍스트 입력 후 제출 버튼 클릭 시 새 카드 생성", () => {
    const { result } = createMockedQuery(() => useCardsQuery());

    waitFor(() => expect(result.current.isSuccess).toBe(true));
    const cardLists = result.current.data;
    expect(cardLists).toEqual(mockedCardLists);
    const { getByText } = setup(cardLists?.data[0]);
    const listTitle = getByText("list1");
    expect(listTitle).toBeInTheDocument();
  });

  it("스냅샷 테스트", () => {
    const component = setup(mockedCardList);
    expect(component).toMatchSnapshot();
  });
});
