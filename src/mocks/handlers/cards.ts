import {  EditCardPositionRequest } from "../../queries/cards/interface";
import {
  type AddCardRequest,
  type AddListRequest,
  type DeleteCardRequest,
  type DeleteListRequest,
  type EditCardRequest,
  type EditListRequest,
} from "@/queries/cards/interface";
import {  DefaultBodyType,  PathParams,  ResponseComposition, rest,  RestContext,  RestRequest } from "msw";
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

const checkAuthorization =  async (
  req: RestRequest<any, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const authToken = req.headers.get("Authorization");

  return !!authToken
};

export const cardsHandlers = [
  rest.get("/cards", async (req, res, ctx) => {
    const search = req.url.searchParams.get('search');
    const data = await getAllCardListsWithCards(search??"")
      return await res(ctx.delay(), ctx.status(201), ctx.json(data));
  }),

  rest.post<AddCardRequest>("/cards",  async (req, res, ctx) => {
    const { listId, description } = req.body;
    const id = uuidv4();

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if(!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

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

  rest.put<EditCardRequest>("/cards", async(req, res, ctx) => {
    const { description, id } = req.body;

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if(!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

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

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if(!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }
     await deleteCard({ id })
      return await res(
        ctx.status(200),
        ctx.json({
          message: "Card deleted",
        }),
      );
  }),

  rest.post<AddListRequest>("/lists", async(req, res, ctx) => {
    const { title } = req.body as {title:string}
    const id = uuidv4();

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if(!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

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

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if(!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    await editCardList({ id, title })
    return await res(
      ctx.status(200),
      ctx.json({
        message: "List updated",
      }),
    );
  }),

  rest.put<EditCardPositionRequest>("/cards/:cardId/move", async (req, res, ctx) => {
    const { cardId } = req.params as { cardId : string }
    const { listId, index } = req.body as any

    const isAuthorized = await checkAuthorization(req, res, ctx);
    if(!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    await editCardPosition({ cardId, listId,index })
    return await res(
      ctx.status(200),
      ctx.json({
        message: "Card position updated",
      }),
    );
  }),

  rest.delete<DeleteListRequest>("/lists", async(req, res, ctx) => {
    const { id } = req.body;

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if(!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

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
