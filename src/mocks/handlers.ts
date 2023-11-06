import { rest } from "msw";
import { cardLists } from "./data/cards";

export const handlers = [
  rest.get("/cards/lists", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cardLists));
  }),

  rest.post("/cards", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "card created",
      })
    );
  }),
];
