/* eslint-disable */
import { type EditCardPositionRequest } from "../../queries/cards/interface";
import {
  type AddCardRequest,
  type AddListRequest,
  type DeleteCardRequest,
  type DeleteListRequest,
  type EditCardRequest,
  type EditListRequest,
} from "@/queries/cards/interface";
import { type DefaultBodyType, type PathParams, type ResponseComposition, rest, type RestContext, type RestRequest } from "msw";
import { v4 as uuidv4 } from "uuid";
import {
  addCard,
  addCardList,
  deleteCard,
  deleteCardList,
  editCard,
  editCardList,
  editCardPosition,
  getAllCardListsWithCards,
} from "../dbfunctions";

const handleAuthError =  (
  req: RestRequest<any, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const authToken = req.headers.get("Authorization");

  if (authToken === undefined) {
    return res(
      ctx.status(401),
      ctx.json({
        message: "access token is required",
      }),
    );
  }
};

export const cardsHandlers = [
  rest.get("/cards", async (req, res, ctx) => {
   const data = await getAllCardListsWithCards()
      return await res(ctx.delay(), ctx.status(201), ctx.json(data));
  }),

  rest.post<AddCardRequest>("/cards",  (req, res, ctx) => {
    const { listId, description } = req.body;
    const id = uuidv4();

    const error = handleAuthError(req, res, ctx);
    if (error != null) return error;

    addCard({ listId, description, id, createdAt: Date.now() })

    return res(
      ctx.delay(),
      ctx.status(201),
      ctx.json({
        message: "Card created",
        id,
        description,
      }),
    );
  }),

  rest.put<EditCardRequest>("/cards", async(req, res, ctx) => {
    const { description, id } = req.body;

    const error = handleAuthError(req, res, ctx);
    if (error != null) return await error;

    await editCard({ id, description })
      return await res(
        ctx.status(200),
        ctx.json({
          message: "Card updated",
        }),
      );
  }),

  rest.delete<DeleteCardRequest>("/cards", async(req, res, ctx) => {
    const { id } = req.body;

    const error = handleAuthError(req, res, ctx);
    if (error != null) return await error;

     await deleteCard({ id })
      return await res(
        ctx.status(200),
        ctx.json({
          message: "Card deleted",
        }),
      );
  }),

  rest.post<AddListRequest>("/lists", async(req, res, ctx) => {
    const { title } = req.body;
    const id = uuidv4();

    const error = handleAuthError(req, res, ctx);
    if (error != null) return await error;

    await addCardList({ title, id, createdAt: Date.now() })
      return await res(
        ctx.status(201),
        ctx.json({
          message: "List created",
          title,
          id,
        }),
      );
  }),

  rest.put<EditListRequest>("/lists", async(req, res, ctx) => {
    const { id, title } = req.body;
    const error = handleAuthError(req, res, ctx);
    if (error != null) return await error;

     await editCardList({ id, title })
      return await res(
        ctx.status(200),
        ctx.json({
          message: "List updated",
        }),
      );
  }),

  rest.put<EditCardPositionRequest>("/cards/:cardId/move", async(req, res, ctx) => {
    const { cardId } = req.params as { cardId: string };
    const { destination, source } = req.body ;
    const error = handleAuthError(req, res, ctx);
    if (error != null) return await error;

     await editCardPosition({ cardId, destination, source })
      return await res(
        ctx.status(200),
        ctx.json({
          message: "Card position updated",
        }),
      );
  }),

  rest.delete<DeleteListRequest>("/lists", async(req, res, ctx) => {
    const { id } = req.body;

    const error = handleAuthError(req, res, ctx);
    if (error != null) return await error;

     await deleteCardList({ id })
     return await res(
      ctx.status(200),
      ctx.json({
        message: "List deleted",
      }),
    );
  }),
];

export default cardsHandlers;
