/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { customRender, waitFor } from "@utils/testUtils";
import { describe, vi, expect } from "vitest";
import { mockedCardLists } from "./mockData";
import * as queries from "@/queries/cards";
import {
  AddCardRequest,
  AddListRequest,
  DeleteCardRequest,
  DeleteListRequest,
  EditCardMutationData,
  EditCardPositionRequest,
  EditCardRequest,
  EditListRequest,
  ResponseMessage,
} from "@/queries/cards/interface";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Board from ".";

vi.mock("@/queries/cards");

describe("Board 테스트", () => {
  const useCardsQueryMock = vi
    .spyOn(queries, "useCardsQuery")
    .mockImplementation(vi.fn().mockReturnValue({ data: mockedCardLists, isLoading: false, isSuccess: true }));

  const useAddListMutationMock = vi.fn().mockResolvedValue({ mutate: vi.fn(), message: "succeed" });
  const useEditListMutationMock = vi.fn().mockResolvedValue({ mutate: vi.fn(), message: "succeed" });
  const useDeleteListMutationMock = vi.fn().mockResolvedValue({ mutate: vi.fn(), message: "succeed" });
  const useEditCardPositionMutationMock = vi.fn().mockResolvedValue({ mutate: vi.fn(), message: "succeed" });

  const useAddCardMutationMock = vi.fn().mockResolvedValue({ mutate: vi.fn(), message: "succeed" });
  const useDeleteCardMutationMock = vi.fn().mockResolvedValue({ mutate: vi.fn(), message: "succeed" });
  const useEditCardMutationMock = vi.fn().mockResolvedValue({ mutate: vi.fn(), message: "succeed" });

  vi.spyOn(queries, "useAddListMutation").mockReturnValue(
    useAddListMutationMock as unknown as UseMutationResult<ResponseMessage, unknown, AddListRequest, unknown>,
  );
  vi.spyOn(queries, "useEditListMutation").mockReturnValue(
    useEditListMutationMock as unknown as UseMutationResult<ResponseMessage, unknown, EditListRequest, unknown>,
  );
  vi.spyOn(queries, "useDeleteListMutation").mockReturnValue(
    useDeleteListMutationMock as unknown as UseMutationResult<ResponseMessage, unknown, DeleteListRequest, unknown>,
  );
  vi.spyOn(queries, "useEditCardPositionMutation").mockReturnValue(
    useEditCardPositionMutationMock as unknown as UseMutationResult<
      ResponseMessage,
      AxiosError<unknown, any>,
      EditCardPositionRequest,
      EditCardMutationData
    >,
  );

  vi.spyOn(queries, "useAddCardMutation").mockReturnValue(
    useAddCardMutationMock as unknown as UseMutationResult<ResponseMessage, unknown, AddCardRequest, unknown>,
  );
  vi.spyOn(queries, "useEditCardMutation").mockReturnValue(
    useEditCardMutationMock as unknown as UseMutationResult<ResponseMessage, unknown, EditCardRequest, unknown>,
  );
  vi.spyOn(queries, "useDeleteCardMutation").mockReturnValue(
    useDeleteCardMutationMock as unknown as UseMutationResult<ResponseMessage, unknown, DeleteCardRequest, unknown>,
  );

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
