import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { userResolvers } from "./resolvers";
import { verify } from "jsonwebtoken";
import { createAccessToken, createRefreshToken } from "./auth";
import { taskResolver } from "./taskResolver";
import { sendRefreshToken } from "./sendRefreshToken";
import { groupResolvers } from "./resolvers/Groups/groupResolvers";
import express from "express";
import cookieParser from "cookie-parser";
import User from "./entity/User";
import memberResolver from "./resolvers/Groups/members";
(async () => {
  AppDataSource.initialize();
  const app = express();
  app.use(cookieParser());
  app.get("/", (_req, res) => res.send("hello world"));
  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "" });
    }
    let payload: any = null;
    try {
      payload = verify(token, "binanc256");
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: createAccessToken });
    }
    const user = await User.findOne({ where: { id: payload.userID } });
    if (!user) {
      return res.send({ ok: false, assessToken: "" });
    }
    sendRefreshToken(res, createRefreshToken(user));
    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [userResolvers, taskResolver, groupResolvers, memberResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(8080, () => {
    console.log("server started");
  });
})();
