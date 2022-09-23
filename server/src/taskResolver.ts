import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import Task from "./entity/Task";
import User from "./entity/User";
import { isAuth } from "./isAuth";
import { MyContext } from "./MyContext";

@Resolver()
export class taskResolver {
  @Query(() => [User])
  @UseMiddleware(isAuth)
  getUserById(@Arg("id", () => Number) id: number) {
    return User.find({ relations: ["tasks"], where: { id: id } });
  }

  @Query(() => [Task])
  allTasks() {
    return Task.find()
  }

  @Query(() => [Task])
  @UseMiddleware(isAuth)
  allTaskData(@Ctx() { payload }: MyContext) {
    return Task.find({ where: { yourid: payload?.userID } });
  }
}
