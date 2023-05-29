import React from "react";
import { describe, vi, expect } from "vitest";
import { customRender, fireEvent, act, waitFor } from "@utils/testUtils";
import CardComposer from ".";

describe("CardComposer 테스트", () => {
  const handleAddCard = vi.fn();
  const handleCardInputToggle = vi.fn();
  const inputToggleButtonText = "Add a card";
  const submitButtonText = "Add card";
  const placeholderText = "Enter a title for this card...";
  const closeButtonTestId = "cardInputCloseButton";

  const setup = (isCardInputOpened: boolean) => {
    const { getByText, getByPlaceholderText, getByLabelText, getByTestId } = customRender(
      <CardComposer
        isLoading={false}
        isCardInputOpened={isCardInputOpened}
        onCardInputToggle={handleCardInputToggle}
        listId="listId"
        onAddCard={handleAddCard}
      />,
    );

    return { getByText, getByPlaceholderText, getByLabelText, getByTestId };
  };

  it("Add a card 버튼 클릭 시 인풋창 열림", () => {
    const { getByPlaceholderText, getByText, getByTestId } = setup(false);
    const inputToggleButton = getByText(inputToggleButtonText);

    act(() => {
      fireEvent.click(inputToggleButton);
    });

    waitFor(() => {
      const input = getByPlaceholderText(placeholderText) as HTMLInputElement;
      const closeButton = getByTestId(closeButtonTestId);
      expect(input).toBeDefined();
      expect(closeButton).toBeDefined();
    });
  });

  it("닫기 버튼 클릭 시 인풋창 닫힘", () => {
    const { getByText, getByTestId } = setup(true);
    const closeButton = getByTestId(closeButtonTestId);

    act(() => {
      fireEvent.click(closeButton);
    });

    waitFor(() => {
      const inputToggleButton = getByText(inputToggleButtonText);
      expect(inputToggleButton).toBeDefined();
    });
  });

  it("텍스트 입력하지 않으면 카드 생성되지 않음", () => {
    const { getByPlaceholderText, getByText } = setup(true);
    const addCardButton = getByText(submitButtonText);
    const input = getByPlaceholderText(placeholderText) as HTMLInputElement;

    expect(input.value).toEqual("");

    act(() => {
      fireEvent.click(addCardButton);
    });

    waitFor(() => {
      expect(handleAddCard).toHaveBeenCalledTimes(0);
    });
  });

  it("텍스트 입력 후 카드 생성", () => {
    const { getByPlaceholderText, getByText } = setup(true);
    const addCardButton = getByText(submitButtonText);
    const input = getByPlaceholderText(placeholderText) as HTMLInputElement;

    act(() => {
      fireEvent.change(input, { target: { value: "text" } });
    });

    expect(input.value).toEqual("text");

    act(() => {
      fireEvent.click(addCardButton);
    });

    waitFor(() => {
      expect(handleAddCard).toHaveBeenCalled();
    });
  });

  it("스냅샷 테스트", () => {
    const component = setup(false);
    expect(component).toMatchSnapshot();
  });
});
