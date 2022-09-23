import User from "./entity/User";
import { sign } from "jsonwebtoken";

export const createAccessToken = (user: User) => {
  return sign({ userID: user.id }, "shaby123", {
    expiresIn: "15m",
  });
};
export const createRefreshToken = (user: User) => {
  return sign({ userID: user.id }, "binanc256", {
    expiresIn: "7d",
  });
};
