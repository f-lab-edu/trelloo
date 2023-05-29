import React from "react";
import { customRender, fireEvent, act, cleanup, waitFor } from "@utils/testUtils";
import { describe, vi, expect } from "vitest";
import Input from ".";

describe("CardComposer 테스트", () => {
  afterEach(cleanup);
  const handleSubmit = vi.fn();
  const handleChange = vi.fn();

  const setup = () => {
    const { getByPlaceholderText } = customRender(
      <Input
        placeHolder="Enter a keyword..."
        name="filterMenu"
        onSubmit={handleSubmit}
        onChange={handleChange}
        defaultValue=""
      />,
    );
    const input = getByPlaceholderText("Enter a keyword...") as HTMLInputElement;

    return { input };
  };

  it("input 값 입력 후 제출하면 onSubmit 호출됨", () => {
    const { input } = setup();

    act(() => {
      fireEvent.change(input, { target: { value: "title" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    });

    expect(input.value).toBe("title");

    waitFor(() => {
      expect(handleSubmit).toBeCalled();
    });
  });

  it("스냅샷 테스트", () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });
});
