import React from "react";
import { customRender, screen } from "@utils/testUtils";
import { beforeEach, describe, vi } from "vitest";
import CardListComposer from ".";

describe("CardListComposer 테스트", () => {
  const handleAddList = vi.fn();

  beforeEach(() => {
    customRender(<CardListComposer onAddList={handleAddList} />);
  });

  it("sdf", () => {
    screen.debug();
    expect(screen.getByRole("button")).toHaveTextContent("Add a list");
    // expect(screen.getByPlaceholderText("Enter list title...")).toBeInTheDocument();
  });
});
