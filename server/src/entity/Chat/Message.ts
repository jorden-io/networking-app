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
  message_id: number;

  @Field()
  @Column("text")
  message: string;

  @Field()
  @Column("int")
  user_id: number;

  @Field()
  @Column("int")
  group_id: number;

  @Field()
  @CreateDateColumn()
  created: Date;

  @ManyToMany(() => User, (users) => users.messages)
  users: User[];

  @ManyToMany(() => Group, (groups) => groups.messages)
  groups: Group[];
}
