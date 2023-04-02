import { getAllData, saveDataByKey } from "./dbfunctions";
import { rest } from "msw";
import { cardLists } from "./data/cards";

interface CardRequestBody {
  text: string;
  listId: string;
}
interface CardResponseBody {
  message: string;
}

export const handlers = [
  rest.get("/cards/lists", (req, res, ctx) => {
    return getAllData().then((data) => {
      return res(ctx.status(200), ctx.json(data));
    });
  }),

  rest.post<string, CardResponseBody>("/cards", (req, res, ctx) => {
    const { text, listId } = JSON.parse(req.body) as CardRequestBody;
    return saveDataByKey({ key: listId, value: text }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "card created",
        }),
      );
    });
  }),

  rest.put("/cards", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "card created",
      }),
    );
  }),

  rest.delete("/cards", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "card created",
      }),
    );
  }),
];
