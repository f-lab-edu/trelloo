import React from "react";
import { customRender, screen } from "@utils/testUtils";
import userEvent from "@testing-library/user-event";
import { describe, vi } from "vitest";
import Card from ".";

describe("카드 컴포넌트 렌더링", () => {
  const handleEditCard = vi.fn();
  const handleDeleteCard = vi.fn();

  beforeEach(() => {
    customRender(
      <Card
        data={{ description: "card description", index: 0, id: "" }}
        onEditCard={handleEditCard}
        onDeleteCard={handleDeleteCard}
      />,
    );
  });

  it("description을 포함한 Card 컴포넌트 렌더링", async () => {
    expect(screen.getByText("card description")).toBeInTheDocument();
  });

  it("hover하면 edit 버튼 표시", () => {
    userEvent.hover(screen.getByText("card description"));
    userEvent.click(screen.getByLabelText("edit"));
  });
});
