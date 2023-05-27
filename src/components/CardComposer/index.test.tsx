import React from "react";
import { customRender, fireEvent } from "@utils/testUtils";
import { describe, vi, expect } from "vitest";
import CardComposer from ".";
import "@testing-library/jest-dom";
import { act, cleanup } from "@testing-library/react";

describe("CardComposer 테스트", () => {
  afterEach(cleanup);
  const handleAddCard = vi.fn();
  const handleCardInputToggle = vi.fn();

  const setup = (isCardInputOpened: boolean) => {
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

  it("텍스트 입력 후 카드 생성", () => {
    const { getByPlaceholderText, getByText } = setup(true);
    const addCardButton = getByText("Add card");
    const input = getByPlaceholderText("Enter a title for this card...") as HTMLInputElement;

    act(() => {
      fireEvent.change(input, { target: { value: "text" } });
    });

    expect(input.value).toEqual("text");

    act(() => {
      fireEvent.click(addCardButton);
    });
    // Need to fix
    // expect(handleAddCard).toHaveBeenCalled();
  });

  it("스냅샷 테스트", () => {
    const component = setup(false);
    expect(component).toMatchSnapshot();
  });
});
