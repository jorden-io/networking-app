import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  CreateDateColumn,
} from "typeorm";
import User from "../User";
import Group from "./Groups";
@ObjectType()
@Entity("messages")
export default class Messages extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  messageId: number;

  @Field()
  @Column("text")
  message: string;

  @Field()
  @Column("int")
  userId: number;

  @Field()
  @Column("int")
  groupId: number;

  @Field()
  @CreateDateColumn()
  created: Date;

  @ManyToMany(() => User, (users) => users.messages)
  users: User[];

  @ManyToMany(() => Group, (groups) => groups.messages)
  groups: Group[];
}
