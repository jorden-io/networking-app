import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "../User";
import Group from "./Groups";

@ObjectType()
@Entity("members")
export default class Members extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("int")
  groupId: number;

  @Field()
  @Column("int")
  memberId: number;

  @Field()
  @CreateDateColumn()
  joined: Date;

  @ManyToMany(() => Group, (group) => group.member)
  @JoinTable()
  group: Group[]

  @ManyToMany(() => User, (user) => user.members,{
     eager: true
  })
  @JoinTable()
  users: User[]
}
