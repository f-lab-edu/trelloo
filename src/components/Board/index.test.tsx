/* eslint-disable */
import React from "react";
import { customRender, fireEvent } from "@utils/testUtils";
import { describe } from "vitest";
import Board from ".";

describe("Board 테스트", () => {
  it("텍스트 입력 후 새 카드 생성", async () => {
    const { getByPlaceholderText, getByText } = customRender(<Board searchKeyword="" />);
  });
});
