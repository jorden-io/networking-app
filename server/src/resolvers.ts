import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { hash, compare } from "bcryptjs";
import User from "./entity/User";
import Task from "./entity/Task";
import { MyContext } from "./MyContext";
import { createRefreshToken } from "./auth";
import { isAuth } from "./isAuth";
import { sendRefreshToken } from "./sendRefreshToken";

@ObjectType()
class loginRes {
  @Field()
  accessToken: string;
}

@Resolver()
export class userResolvers {
  
  @Query(() => [User])
  @UseMiddleware(isAuth)
  getT(@Ctx() { payload }: MyContext) {
    return Task.findOne({
      relations: ["users"],
      where: { id: payload?.userID },
    });
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async createTask(
    @Arg("task", () => String) task: string,
    @Arg("truth", () => Boolean) truth: boolean,
    @Ctx() { payload }: MyContext
  ) {
    try {
      await Task.insert({
        truth: truth,
        yourid: payload?.userID,
        task,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }

  @Query(() => [User])
  allUsers() {
    return User.find();
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    console.log(payload);
    return `your user id is: ${payload!.userID} `;
  }

  @Query(() => [Task])
  @UseMiddleware(isAuth)
  myTasks(@Ctx() { payload }: MyContext) {
    return Task.find({ where: { yourid: payload!.userID } });
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string,
    @Arg("firstName", () => String) firstName: string,
    @Arg("lastName", () => String) lastName: string,
    @Arg("userName", () => String) userName: string,
  ) {
    const hashedPassword = await hash(password, 12);
    try {
      await User.insert({
        userName,
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }

  @Mutation(() => loginRes)
  async login(
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string,
    @Ctx() { res }: MyContext
  ): Promise<loginRes> {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("wrong email or passwoord");
    }
    const valid = await compare(password, user.password);
    if (!valid) {
      throw new Error("wrong password");
    }
    sendRefreshToken(res, createRefreshToken(user))
    // res.cookie("jid", createAccessToken(user), {
    //   httpOnly: true,
    // });
    return {
      accessToken: createRefreshToken(user),
    };
  }
}
