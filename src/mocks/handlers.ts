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
];

const cardList = [{ title: "title" }];
