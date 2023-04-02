import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";
import { addCard, getAllCardListsWithCards } from "./dbfunctions";

interface CardRequestBody {
  text: string;
  listId: string;
}
interface CardResponseBody {
  message: string;
}

export const handlers = [
  rest.get("/cards/lists", (req, res, ctx) => {
    return getAllCardListsWithCards().then((data) => {
      return res(ctx.status(200), ctx.json(data));
    });
  }),

  rest.post<string, CardResponseBody>("/cards", (req, res, ctx) => {
    const { text, listId } = JSON.parse(req.body) as CardRequestBody;
    return addCard({ listId, text, id: uuidv4() }).then(() => {
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
