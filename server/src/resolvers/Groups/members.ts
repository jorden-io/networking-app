import { isAuth } from "../../isAuth";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import Members from "../../entity/Chat/Members";
import { MyContext } from "../../MyContext";
import User from "../../entity/User";
import { In } from "typeorm";
@Resolver(Members)
export default class memberResolver {
  @Query(() => [Members])
  async getGroupMembers(@Arg("memberId", () => Number) memberId: any) {
    return await Members.find({
      join: {
        alias: "groupMembers",
        innerJoinAndSelect: {
          users: "groupMembers.users",
        },
      },
      relations: ["users"],
      where: {
        id: In(memberId),
      },
    });
  }
  
  @Query(() => [Members])
  async getMems(@Arg("groupId", () => Number) groupId: number) {
    return await Members.find({ where: { groupId } });
  }

  @Query(() => [User])
  async getTest(@Arg("id", () => Number) id: number): Promise<Array<User>> {
    return await User.find({ where: { id } });
  }

  @Query(() => [User])
  async getGroupUser(@Arg("memberId", () => Number) memberId: number) {
    return await User.find({
      where: { id: memberId },
    });
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  joinGroup(
    @Arg("groupId", () => Number) groupId: number,
    @Ctx() { payload }: MyContext
  ) {
    Members.insert({ groupId: groupId, memberId: payload?.userID });
    return true;
  }
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  leaveGroup(
    @Arg("groupId", () => Number) groupId: number
    // @Ctx() { payload }: MyContext
  ) {
    Members.delete({ groupId });
    return true;
  }
}
