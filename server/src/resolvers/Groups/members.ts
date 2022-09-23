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
  @Query(() => [User])
  async getGroupMembers(@Arg("groupId", () => Number) groupId: any) {
    return await User.find({
      join: {
        alias: "groupMembers",
        innerJoinAndSelect: {
          users: "groupMembers.users",
        },
      },
      relations: ["members"],
      where: {
        id: In(groupId),
      },
    });
  }

  @Query(() => [User])
  async workAround(@Arg("id", () => Number) id: number) {
    return await User.find({ where: { id: id } });
  }

  @Query(() => [User])
  async getMems(@Arg("id", () => Number) id: number) {
    return await User.find({
      relations: ["members"],
      where: { members: { memberId: id } },
    });
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