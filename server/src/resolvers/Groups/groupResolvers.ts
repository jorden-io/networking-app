import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
// import Task from "./entity/Task";
import { isAuth } from "../../isAuth";
import { MyContext } from "../../MyContext";
import Group from "../.././entity/Chat/Groups";

@Resolver()
export class groupResolvers {
  @Query(() => [Group])
  @UseMiddleware(isAuth)
  myGroups(@Ctx() { payload }: MyContext) {
    return Group.find({ where: { leaderId: payload?.userID } });
  }

  @Query(() => [Group])
  allGroups() {
    return Group.find();
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async createGroup(
    @Ctx() { payload }: MyContext,
    @Arg("groupName", () => String) groupName: string,
    @Arg("description", () => String) description: string
  ) {
    try {
      await Group.insert({
        groupName,
        description,
        leaderId: payload?.userID,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}
