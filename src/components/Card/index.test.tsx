import React from "react";
import { customRender } from "@utils/testUtils";
import { describe } from "vitest";
import Card from ".";

/**
 * 1. render
 * 2. 카드 인풋이 비어있을 때, add card 버튼 클릭하면
 */

describe("test card render test", () => {
  it("카드 인풋값이 없을 경우 Add card 버튼을 클릭해도 카드 생성되지 않음", async () => {
    customRender(<Card data={{ description: "", index: 0, id: "" }} onEditCard={() => {}} onDeleteCard={() => {}} />);
  });
});
