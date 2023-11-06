import { type EditCardPositionParam, type EditCardPositionRequest } from "../../queries/cards/interface";
import {
  type AddCardRequest,
  type AddListRequest,
  type DeleteCardRequest,
  type DeleteListRequest,
  type EditCardRequest,
  type EditListRequest,
  type ResponseMessage,
} from "@/queries/cards/interface";
import { type DefaultBodyType, type ResponseComposition, rest, type RestContext, type RestRequest } from "msw";
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

const handleAuthError = async (
  req: RestRequest<string, Record<string, any>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const authToken = req.headers.get("Authorization");

  if (authToken === undefined) {
    return await res(
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

  rest.post<string, ResponseMessage>("/cards", async (req, res, ctx) => {
    const { description, listId } = JSON.parse(req.body) as AddCardRequest;
    const id = uuidv4();

    const error = handleAuthError(req, res, ctx);
    if (error != null) return await error;

    await addCard({ listId, description, id, createdAt: Date.now() })
      return await res(
        ctx.delay(),
        ctx.status(201),
        ctx.json({
          message: "Card created",
          id,
          description,
        }),
      );
  }),

  rest.put<string, ResponseMessage>("/cards", async (req, res, ctx) => {
    const { id, description } = JSON.parse(req.body) as EditCardRequest;

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

  rest.delete<string, ResponseMessage>("/cards", async (req, res, ctx) => {
    const { id } = JSON.parse(req.body) as DeleteCardRequest;

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

  rest.post<string, ResponseMessage>("/lists", async (req, res, ctx) => {
    const { title } = JSON.parse(req.body) as AddListRequest;
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

  rest.put<string, ResponseMessage>("/lists", async (req, res, ctx) => {
    const { id, title } = JSON.parse(req.body) as EditListRequest;

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

  rest.put<string, EditCardPositionParam>("/cards/:cardId/move", async (req, res, ctx) => {
    const { cardId } = req.params;
    const { destination, source } = JSON.parse(req.body) as EditCardPositionRequest;

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

  rest.delete<string, ResponseMessage>("/lists", async (req, res, ctx) => {
    const { id } = JSON.parse(req.body) as DeleteListRequest;

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
