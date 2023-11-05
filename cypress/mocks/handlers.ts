import { mockedCardLists } from "./data/cards";
import * as I from "../../src/queries/cards/interface";
import { DefaultBodyType, PathParams, ResponseComposition, rest, RestContext, RestRequest } from "msw";
import { v4 as uuidv4 } from "uuid";

const checkAuthorization = (
  req: RestRequest<any, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const authToken = req.headers.get("Authorization");

  return !!authToken;
};

export const cardsHandlers = [
  rest.get("/cards", (req, res, ctx) => {
    return res(ctx.delay(), ctx.status(201), ctx.json(mockedCardLists));
  }),

  rest.post<I.AddCardRequest>("/cards", (req, res, ctx) => {
    const { description } = req.body;
    const id = uuidv4();

    const isAuthorized = checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

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

  rest.put<I.EditCardRequest>("/cards", (req, res, ctx) => {
    const isAuthorized = checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return res(
        ctx.delay(),
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: "Card updated",
      }),
    );
  }),

  rest.delete<I.DeleteCardRequest>("/cards", (req, res, ctx) => {
    const isAuthorized = checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        message: "Card deleted",
      }),
    );
  }),

  rest.post<I.AddListRequest>("/lists", (req, res, ctx) => {
    const { title } = req.body as { title: string };
    const id = uuidv4();

    const isAuthorized = checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return res(
      ctx.status(201),
      ctx.json({
        message: "List created",
        title,
        id,
      }),
    );
  }),

  rest.put<I.EditListRequest>("/lists", (req, res, ctx) => {
    const isAuthorized = checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: "List updated",
      }),
    );
  }),

  rest.put<I.EditCardPositionRequest>("/cards/:cardId/move", (req, res, ctx) => {
    const isAuthorized = checkAuthorization(req, res, ctx);
    if (!isAuthorized) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: "Card position updated",
      }),
    );
  }),

  rest.delete<I.DeleteListRequest>("/lists", (req, res, ctx) => {
    const isAuthorized = checkAuthorization(req, res, ctx);

    if (!isAuthorized) {
      return res(
        ctx.status(401),
        ctx.json({
          message: "access token is required",
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: "List deleted",
      }),
    );
  }),
];

export default cardsHandlers;
