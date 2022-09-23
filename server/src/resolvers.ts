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
class Stack {
  init: number | undefined;
  length: number = 0;
  private storage: any = {};
  constructor(init?: number | undefined) {
    this.init = init;
    this.storage[this.length] = init;
    this.length = 1;
  }
  push<T>(val: T): void {
    this.length++;
    this.storage[this.length] = val;
  }
  pop(): undefined | number {
    if (this.length === 0){
      return undefined;
    }
    const result = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return result;
  }
  peek(): number{
  return this.storage[this.length]
  }
}
const stack = new Stack();
stack.push(10)
stack.push(64)
stack.push(18)
stack.push(1)
const val = stack.pop()
console.log(stack.length)
console.log(val)
//console.log(stack.length)
// const closure = (x: number) => {
//   const closedFuntion = (y: number) => {
//     const evenInner = (z: number) => {
//       const moreInner = (q: number) =>{
//         return x + y + z + q;
//       }
//       return moreInner
//     };
//     return evenInner;
//   };
//   return closedFuntion;
// };
// const idk = closure(1)(5)(10)(10)
// console.log(idk);
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
    @Arg("userName", () => String) userName: string
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
    sendRefreshToken(res, createRefreshToken(user));
    // res.cookie("jid", createAccessToken(user), {
    //   httpOnly: true,
    // });
    return {
      accessToken: createRefreshToken(user),
    };
  }
}
