import { rest } from "msw";

export const handlers = [
  rest.get("/card/list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: cardList,
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

const cardList = [
  { id: 0, title: "cardTitle1" },
  { id: 1, title: "cardTitle2" },
];
