import { EditCardPositionParam, EditCardPositionRequest } from "../../queries/cards/interface";
import {
  AddCardRequest,
  AddListRequest,
  DeleteCardRequest,
  DeleteListRequest,
  EditCardRequest,
  EditListRequest,
  ResponseMessage,
} from "@/queries/cards/interface";
import { rest } from "msw";
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

const cardsHandlers = [
  rest.get("/cards", (req, res, ctx) => {
    return getAllCardListsWithCards().then((data) => {
      return res(ctx.delay(), ctx.status(500), ctx.json(data));
    });
  }),

  rest.post<string, ResponseMessage>("/cards", (req, res, ctx) => {
    const { description, listId } = JSON.parse(req.body) as AddCardRequest;
    const id = uuidv4();

    return addCard({ listId, description, id, createdAt: Date.now() }).then(() => {
      return res(
        ctx.delay(),
        ctx.status(201),
        ctx.json({
          message: "Card created",
          id,
          description,
        }),
      );
    });
  }),

  rest.put<string, ResponseMessage>("/cards", (req, res, ctx) => {
    const { id, description } = JSON.parse(req.body) as EditCardRequest;
    return editCard({ id, description }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Card updated",
        }),
      );
    });
  }),

  rest.delete<string, ResponseMessage>("/cards", (req, res, ctx) => {
    const { id } = JSON.parse(req.body) as DeleteCardRequest;
    return deleteCard({ id }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Card deleted",
        }),
      );
    });
  }),

  rest.post<string, ResponseMessage>("/lists", (req, res, ctx) => {
    const { title } = JSON.parse(req.body) as AddListRequest;
    const id = uuidv4();

    return addCardList({ title, id, createdAt: Date.now() }).then(() => {
      return res(
        ctx.status(201),
        ctx.json({
          message: "List created",
          title,
          id,
        }),
      );
    });
  }),

  rest.put<string, ResponseMessage>("/lists", (req, res, ctx) => {
    const { id, title } = JSON.parse(req.body) as EditListRequest;
    return editCardList({ id, title }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "List updated",
        }),
      );
    });
  }),

  rest.put<string, EditCardPositionParam>("/cards/:cardId/move", (req, res, ctx) => {
    const { cardId } = req.params;
    const { destination, source } = JSON.parse(req.body) as EditCardPositionRequest;

    return editCardPosition({ cardId, destination, source }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Card position updated",
        }),
      );
    });
  }),

  rest.delete<string, ResponseMessage>("/lists", (req, res, ctx) => {
    const { id } = JSON.parse(req.body) as DeleteListRequest;
    return deleteCardList({ id }).then(() => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "List deleted",
        }),
      );
    });
  }),
];

export default cardsHandlers;
