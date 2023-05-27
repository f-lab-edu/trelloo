import React from "react";
import { customRender, screen } from "@utils/testUtils";
import { beforeEach, describe, vi } from "vitest";
import CardListComposer from ".";

describe("CardListComposer 테스트", () => {
  const handleAddList = vi.fn();

  beforeEach(() => {
    customRender(<CardListComposer onAddList={handleAddList} />);
  });

  it("컴포넌트 렌더링", () => {
    expect(screen.getByRole("button")).toHaveTextContent("Add a list");
  });

  it("스냅샷 테스트", () => {
    const component = customRender(<CardListComposer onAddList={handleAddList} />);
    expect(component).toMatchSnapshot();
  });
});
