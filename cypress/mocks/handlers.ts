import { mockedCardLists } from "./data/cards";
import * as I from "../../src/queries/cards/interface";
import { DefaultBodyType, PathParams, ResponseComposition, rest, RestContext, RestRequest } from "msw";
import { v4 as uuidv4 } from "uuid";
import { SEARCH_PARAMS_KEY } from "../../src/constants";

const checkAuthorization = async (
  req: RestRequest<any, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const authToken = req.headers.get("Authorization");

  return !!authToken;
};

export const cardsHandlers = [
  rest.get("/cards", async (req, res, ctx) => {
    return await res(ctx.delay(), ctx.status(201), ctx.json(mockedCardLists)); //return mock data
  }),

  rest.post<I.AddCardRequest>("/cards", async (req, res, ctx) => {
    const { description } = req.body;
    const id = uuidv4();

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

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

  rest.put<I.EditCardRequest>("/cards", async (req, res, ctx) => {
    const isAuthorized = await checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return await res(
        ctx.delay(),
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return await res(
      ctx.status(200),
      ctx.json({
        message: "Card updated",
      }),
    );
  }),

  rest.delete<I.DeleteCardRequest>("/cards", async (req, res, ctx) => {
    const isAuthorized = await checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }
    return await res(
      ctx.status(200),
      ctx.json({
        message: "Card deleted",
      }),
    );
  }),

  rest.post<I.AddListRequest>("/lists", async (req, res, ctx) => {
    const { title } = req.body as { title: string };
    const id = uuidv4();

    const isAuthorized = await checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return await res(
      ctx.status(201),
      ctx.json({
        message: "List created",
        title,
        id,
      }),
    );
  }),

  rest.put<I.EditListRequest>("/lists", async (req, res, ctx) => {
    const isAuthorized = await checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return await res(
      ctx.status(200),
      ctx.json({
        message: "List updated",
      }),
    );
  }),

  rest.put<I.EditCardPositionRequest>("/cards/:cardId/move", async (req, res, ctx) => {
    const isAuthorized = await checkAuthorization(req, res, ctx);
    if (!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return await res(
      ctx.status(200),
      ctx.json({
        message: "Card position updated",
      }),
    );
  }),

  rest.delete<I.DeleteListRequest>("/lists", async (req, res, ctx) => {
    const isAuthorized = await checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return await res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return await res(
      ctx.status(200),
      ctx.json({
        message: "List deleted",
      }),
    );
  }),
];

export default cardsHandlers;
