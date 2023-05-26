import React, { useState } from "react";
import { customRender, fireEvent, renderHook } from "@utils/testUtils";
import { describe, vi, expect } from "vitest";
import CardComposer from ".";
import "@testing-library/jest-dom";
import { act, cleanup } from "@testing-library/react";

describe("CardComposer 테스트", () => {
  afterEach(cleanup);
  const handleAddCard = vi.fn();

  function useCardState() {
    const [isCardInputOpened, setIsCardInputOpened] = useState(false);

    const handleCardInputToggle = () => {
      setIsCardInputOpened(!isCardInputOpened);
    };
    return { isCardInputOpened, handleCardInputToggle };
  }

  const { result } = renderHook(useCardState);

  const setup = (isCardInputOpened: boolean, handleCardInputToggle: () => void) => {
    const { getByText, getByPlaceholderText, getByLabelText } = customRender(
      <CardComposer
        isLoading={false}
        isCardInputOpened={isCardInputOpened}
        onCardInputToggle={handleCardInputToggle}
        listId="listIs"
        onAddCard={handleAddCard}
      />,
    );

    return { getByText, getByPlaceholderText, getByLabelText };
  };

  it("텍스트 입력 후 카드 생성", async () => {
    const { getByPlaceholderText, getByText } = setup(
      result.current.isCardInputOpened,
      result.current.handleCardInputToggle,
    );
    const addCardButton = getByText("Add card");
    const input = getByPlaceholderText("Enter a title for this card...") as HTMLInputElement;

    act(() => {
      fireEvent.change(input, { target: { value: "text" } });
    });

    expect(input.value).toEqual("text");

    act(() => {
      fireEvent.click(addCardButton);
    });

    expect(handleAddCard).toHaveBeenCalled();
  });
});
