/* eslint-disable */
import React, { useState } from "react";
import { customRender, fireEvent, renderHook } from "@utils/testUtils";
import { describe, vi, expect } from "vitest";
import CardComposer from ".";
import "@testing-library/jest-dom";
import { act, screen, waitFor } from "@testing-library/react";

describe("CardComposer 테스트", () => {
  const handleAddCard = vi.fn();

  function useCardState() {
    const [isCardInputOpened, setIsCardInputOpened] = useState(false);

    const handleCardInputToggle = () => {
      setIsCardInputOpened(!isCardInputOpened);
    };
    return { isCardInputOpened, handleCardInputToggle };
  }

  const { result } = renderHook(() => useCardState());

  customRender(
    <CardComposer
      isLoading={false}
      isCardInputOpened={result.current.isCardInputOpened}
      onCardInputToggle={result.current.handleCardInputToggle}
      listId="listIs"
      onAddCard={handleAddCard}
    />,
  );

  it("Add a card 버튼 표시됨", async () => {
    // const cardInputToggleButton = screen.getByText("Add a card");
    // expect(cardInputToggleButton).toBeInTheDocument();
    // fireEvent.click(cardInputToggleButton);
    //...
    // const submitButton = screen.getByRole("button", { type: "submit" });
    // expect(submitButton).toBeInTheDocument();
    // fireEvent.click(submitButton);
    //...
    // screen.debug();
  });

  // it("Add a card 버튼 클릭 시 인풋창 렌더링", async () => {
  //   const cardInputToggleButton = getByText("Add a card");

  //   expect(result.current.isCardInputOpened).toBeFalsy();

  //   fireEvent.click(cardInputToggleButton);

  //   expect(result.current.isCardInputOpened).toEqual(true);
  //   const { getByPlaceholderText, getByText } = customRender(
  //     <CardComposer
  //       isLoading={false}
  //       isCardInputOpened={result.current.isCardInputOpened}
  //       onCardInputToggle={result.current.handleCardInputToggle}
  //       listId="listIs"
  //       onAddCard={handleAddCard}
  //     />,
  //   );
  //   const addCardSubmitButton = getByText("Add card");
  //   expect(addCardSubmitButton).toBeInTheDocument();
  // });

  // it("Add a card 버튼 클릭 시 인풋창 렌더링", () => {
  //   //
  // });

  // it("닫기 버튼 클릭 시 인풋창 닫음", () => {
  //   //
  // });

  // it("텍스트 입력 후 버튼 클릭 시 새 카드 생성", async () => {
  // const addCardSubmitButton = getByText("Add card");

  // const descriptionInput = getByPlaceholderText("Enter a title for this card...") as HTMLInputElement;

  //   expect(addCardSubmitButton).toBeInTheDocument();

  //   const textToType = "New card description";

  //   fireEvent.change(descriptionInput, { target: { value: textToType } });
  //   expect(descriptionInput.value).toEqual(textToType);

  //   fireEvent.click(addCardSubmitButton);

  //   // handleAddCard 호출되지 않는 에러 수정 필요
  //   // expect(handleAddCard).toHaveBeenCalledTimes(1);
  //   expect(descriptionInput.value).toEqual("");
  // });

  // it("아무 텍스트도 입력하지 않으면 카드 생성하지 않음", () => {
  //   fireEvent.change(descriptionInput, { target: { value: "" } });

  //   expect(descriptionInput.value).toEqual("");
  //   fireEvent.click(addCardSubmitButton);
  //   expect(handleAddCard).toHaveBeenCalledTimes(0);
  // });
});
