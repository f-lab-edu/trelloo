import React from "react";
import { describe, vi, expect } from "vitest";
import { act, customRender, fireEvent, waitFor } from "@utils/testUtils";
import CardListComposer from ".";

describe("CardListComposer 테스트", () => {
  const handleAddList = vi.fn();
  const handleAddCard = vi.fn();
  const toggleInputOpen = vi.fn();
  const inputToggleButtonText = "Add a list";
  const submitButtonText = "Add list";
  const placeholderText = "Enter list title...";
  const closeButtonTestId = "cardInputCloseButton";

  const setup = (isInputOpen: boolean) => {
    const { getByText, getByPlaceholderText, getByTestId } = customRender(
      <CardListComposer isInputOpen={isInputOpen} toggleInputOpen={toggleInputOpen} onAddList={handleAddList} />,
    );
    return { getByText, getByPlaceholderText, getByTestId };
  };

  it("Add a list 버튼 클릭 시 인풋창 열림", () => {
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

  it("텍스트 입력하지 않으면 카드 목록 생성되지 않음", () => {
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

  it("텍스트 입력 후 카드 목록 생성", () => {
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
