import React from "react";
import { describe, vi, expect } from "vitest";
import { customRender, fireEvent, act, waitFor } from "@utils/testUtils";
import Composer from ".";

describe("CardComposer 테스트", () => {
  const toggleInputOpen = vi.fn();
  const handleSubmit = vi.fn();
  const inputToggleButtonText = "Input toggle button";
  const submitButtonText = "Submit button";

  const setup = (isOpen: boolean) => {
    const { getByText, getByPlaceholderText, getByLabelText, getByTestId } = customRender(
      <Composer
        isOpen={isOpen}
        btnText={inputToggleButtonText}
        submitBtnText={submitButtonText}
        toggleInputOpen={toggleInputOpen}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Enter text" />
      </Composer>,
    );

    return { getByText, getByPlaceholderText, getByLabelText, getByTestId };
  };

  it("input toggle 버튼 클릭 시 toggleInputOpen 함수 호출", () => {
    const { getByText } = setup(false);
    const inputToggleButton = getByText(inputToggleButtonText);

    act(() => {
      fireEvent.click(inputToggleButton);
    });

    waitFor(() => {
      expect(toggleInputOpen).toHaveBeenCalled();
    });
  });

  it("submit 버튼 클릭 시 handleSubmit 함수 호출", () => {
    const { getByText } = setup(true);
    const submitButton = getByText(submitButtonText);

    act(() => {
      fireEvent.click(submitButton);
    });

    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });

  it("닫기 버튼 클릭 시 toggleInputOpen 함수 호출", () => {
    const { getByTestId } = setup(true);
    const closeButton = getByTestId("cardInputCloseButton");

    act(() => {
      fireEvent.click(closeButton);
    });

    waitFor(() => {
      expect(toggleInputOpen).toHaveBeenCalled();
    });
  });

  it("스냅샷 테스트", () => {
    const component = setup(false);
    expect(component).toMatchSnapshot();
  });
});
