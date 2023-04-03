import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";
import { addCard, addCardList, editCard, getAllCardListsWithCards } from "./dbfunctions";

interface AddCardRequestBody {
  text: string;
  listId: string;
}

interface EditCardRequestBody {
  id: string;
  text: string;
}

interface AddListRequestBody {
  title: string;
}

interface DefaultResponseBody {
  message: string;
}

export const handlers = [
  rest.get("/cards/lists", (req, res, ctx) => {
    return getAllCardListsWithCards().then((data) => {
      return res(ctx.status(200), ctx.json(data));
    });
  }),

  rest.post<string, DefaultResponseBody>("/cards", (req, res, ctx) => {
    const { text, listId } = JSON.parse(req.body) as AddCardRequestBody;
    return addCard({ listId, text, id: uuidv4(), createdAt: Date.now() }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "card created",
        }),
      );
    });
  }),

  rest.post<string, DefaultResponseBody>("/list", (req, res, ctx) => {
    const { title } = JSON.parse(req.body) as AddListRequestBody;
    return addCardList({ title, id: uuidv4(), createdAt: Date.now() }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "list created",
        }),
      );
    });
  }),

  rest.put<string, DefaultResponseBody>("/cards", (req, res, ctx) => {
    const { id, text } = JSON.parse(req.body) as EditCardRequestBody;
    return editCard({ id, text }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "card updated",
        }),
      );
    });
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
