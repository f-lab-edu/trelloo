import { rest } from "msw";

const authHandlers = [
  rest.post("/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "login succeed",
        accessToken: "OJs_login_token_3sDEjxdjZE",
      }),
    );
  }),
];
export default authHandlers;
