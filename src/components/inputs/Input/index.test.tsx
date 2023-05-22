import React from "react";
import { customRender, fireEvent } from "@utils/testUtils";
import { describe, vi, expect } from "vitest";
import "@testing-library/jest-dom";
import { act, cleanup } from "@testing-library/react";
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
    const input = getByPlaceholderText("Enter a keyword...");

    return { input };
  };

  it("input 값 입력 후 제출하면 onSubmit 호출됨", async () => {
    const { input } = setup();

    act(() => {
      fireEvent.change(input, { target: { value: "title" } });
      fireEvent.submit(input);
    });

    expect(handleSubmit).toHaveBeenCalled();
  });
});
