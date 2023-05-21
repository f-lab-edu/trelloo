import { renderHook } from "@testing-library/react";
import { customRender } from "@utils/testUtils";
import React, { useState } from "react";
import { describe, vi } from "vitest";
import CardEditor from ".";

describe("test CardEditor", () => {
  it("sdf", () => {
    const handleEditCard = vi.fn();
    const handleDeleteCard = vi.fn();

    const useCardState = () => {
      const [cardEditorOpened, setCardEditorOpened] = useState(false);

      const handleOpenCardEditor = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        setCardEditorOpened(!cardEditorOpened);
      };
      return { cardEditorOpened, setCardEditorOpened, handleOpenCardEditor };
    };

    const { result } = renderHook(() => useCardState());

    customRender(
      <CardEditor
        data={{ id: "", description: "sdf", index: 0 }}
        onCardEditorClose={result.current.handleOpenCardEditor}
        setCardEditorOpened={result.current.setCardEditorOpened}
        onEditCard={handleEditCard}
        onDeleteCard={handleDeleteCard}
      />,
    );
  });
});
