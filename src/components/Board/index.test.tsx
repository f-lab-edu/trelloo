/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { describe, vi, expect } from "vitest";
import { customRender, waitFor } from "@utils/testUtils";
import { mockedCardLists } from "./mockData";
import * as queries from "@/queries/cards";
import Board from ".";

vi.mock("@/queries/cards");

describe("Board 테스트", () => {
  const useCardsQueryMock = vi
    .spyOn(queries, "useCardsQuery")
    .mockImplementation(vi.fn().mockReturnValue({ data: mockedCardLists, isLoading: false, isSuccess: true }));

  const useAddListMutationMock = vi.fn();
  const useEditListMutationMock = vi.fn();
  const useDeleteListMutationMock = vi.fn();
  const useEditCardPositionMutationMock = vi.fn();
  const useAddCardMutationMock = vi.fn();
  const useDeleteCardMutationMock = vi.fn();
  const useEditCardMutationMock = vi.fn();

  vi.spyOn(queries, "useAddListMutation").mockImplementation(useAddListMutationMock);
  vi.spyOn(queries, "useEditListMutation").mockImplementation(useEditListMutationMock);
  vi.spyOn(queries, "useDeleteListMutation").mockImplementation(useDeleteListMutationMock);
  vi.spyOn(queries, "useEditCardPositionMutation").mockImplementation(useEditCardPositionMutationMock);
  vi.spyOn(queries, "useAddCardMutation").mockImplementation(useAddCardMutationMock);
  vi.spyOn(queries, "useEditCardMutation").mockImplementation(useEditCardMutationMock);
  vi.spyOn(queries, "useDeleteCardMutation").mockImplementation(useDeleteCardMutationMock);

  it("Board 컴포넌트 렌더링 후 useCardsQuery 호출", () => {
    customRender(<Board searchKeyword="" />);

    waitFor(() => {
      expect(useCardsQueryMock).toHaveBeenCalled();
    });
  });

  it("스냅샷 테스트", () => {
    const component = customRender(<Board searchKeyword="" />);
    expect(component).toMatchSnapshot();
  });
});
