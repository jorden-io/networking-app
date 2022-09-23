import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../../isAuth";
import { MyContext } from "../../MyContext";
import Group from "../.././entity/Chat/Groups";
import User from "../../entity/User";
import Members from "../../entity/Chat/Members";

@Resolver()
export class groupResolvers {
  @Query(() => [Group])
  @UseMiddleware(isAuth)
  myGroups(@Ctx() { payload }: MyContext) {
    return Group.find({ where: { leaderId: payload?.userID } });
  }

  @Query(() => [Members])
  memys() {
    return Members.find();
  }

  @Query(() => [Group])
  allGroups() {
    return Group.find();
  }

  @Query(() => [Group, User])
  async testGetMembs(@Arg("id", () => Number) id: number) {
    await Group.find({
      where: { groupId: id },
    }).then((data) => {
      return data.forEach((e) =>
        User.find({ where: { members: { groupId: e.groupId } } })
      );
    });
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
