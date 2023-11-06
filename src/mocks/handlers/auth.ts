import { rest } from "msw";

const authHandlers = [
  rest.post("/login", async (req, res, ctx) => {
    return await res(
      ctx.status(200),
      ctx.json({
        message: "login succeed",
        accessToken: "OJs_login_token_3sDEjxdjZE",
      }),
    );
  }),
];
export default authHandlers;
