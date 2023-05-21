import React from "react";
import { customRender, screen } from "@utils/testUtils";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Card from ".";

describe("test card render test", () => {
  beforeEach(() => {
    customRender(
      <Card
        data={{ description: "card description", index: 0, id: "" }}
        onEditCard={() => {}}
        onDeleteCard={() => {}}
      />,
    );
  });
  it("description을 포함한 Card 컴포넌트 렌더링", async () => {
    expect(screen.getByText("card description")).toBeInTheDocument();
  });

  it("hover하면 edit 버튼 표시", () => {
    userEvent.hover(screen.getByText("card description"));
    userEvent.click(screen.getByLabelText("edit"));
    screen.debug();
  });
});
