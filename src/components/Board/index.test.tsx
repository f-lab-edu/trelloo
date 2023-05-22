/* eslint-disable */
import React from "react";
import { customRender, fireEvent, renderHook, screen, waitFor } from "@utils/testUtils";
import { describe } from "vitest";
import Board from ".";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { rest, setupWorker } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get("/cards", (req, res, ctx) => {
    return res(
      ctx.json({
        code: 1,
        data: [
          {
            id: "list1",
            title: "list1",
            cards: [
              {
                id: "card1",
                text: "card1",
              },
              {
                id: "card2",
                text: "card2",
              },
            ],
          },
          {
            id: "list2",
            title: "list2",
            cards: [
              {
                id: "card2-1",
                text: "card2-1",
              },
            ],
          },
        ],
      }),
    );
  }),
];

// export const worker = setupWorker(...handlers);

describe("Board 테스트", () => {
  function useCardsQuery() {
    return useQuery({
      queryKey: ["fetchData"],
      queryFn: () => {
        return { code: 1 };
      },
    });
  }

  beforeEach(() => {
    // worker.start();
  });

  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("텍스트 입력 후 새 카드 생성", async () => {
    const { result } = renderHook(() => useCardsQuery(), { wrapper });

    // await waitFor(() => {
    // return result.current.isSuccess;
    // });

    // expect(result.current.data).toEqual({ code: 1 });
    const { getByPlaceholderText, getByText } = customRender(<Board searchKeyword="" />);
    screen.debug();
  });
  // data fetch하는 부분 query mocking 하기
  // 각각의 cardList, card mocking하기
});
