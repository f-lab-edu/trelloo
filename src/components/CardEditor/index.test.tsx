import React from "react";
import { customRender } from "@utils/testUtils";
import { describe, vi } from "vitest";
import CardEditor from ".";

describe("CardEditor 테스트", () => {
  it("컴포넌트 렌더링", () => {
    const handleCardEditorClose = vi.fn();
    const setCardEditorOpened = vi.fn();
    const handleEditCard = vi.fn();
    const handleDeleteCard = vi.fn();

    customRender(
      <CardEditor
        data={{ id: "", description: "sdf", index: 0 }}
        onCardEditorClose={handleCardEditorClose}
        setCardEditorOpened={setCardEditorOpened}
        onEditCard={handleEditCard}
        onDeleteCard={handleDeleteCard}
      />,
    );
  });
});
