import { rest } from "msw";
import { cardLists } from "./data/cards";

export const handlers = [
  rest.get("/card/list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: cardLists,
      })
    );
  }),

  rest.post("/card/list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "card created",
      })
    );
  }),
];
