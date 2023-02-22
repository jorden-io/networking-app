import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "../User";
import Members from "./Members";
import Messages from "./Message";
@ObjectType()
@Entity("groups")
export default class Group extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  group_id: number;

  @Field()
  @Column("text")
  group_name: string;

  @Field()
  @Column("text")
  description: string;

  @Field()
  @Column("int")
  leader_id: number;

  @Field()
  @CreateDateColumn()
  created: Date;

  @Field(() => [User], {nullable: true})
  theUsers: User[];

  @Field()
  @UpdateDateColumn()
  update_time: Date;

  @ManyToMany(() => User, (users) => users.groups, {
    cascade: true,
  })
  users: Promise<User[]>;

  @ManyToMany(() => Messages, (messages) => messages.groups, {
    cascade: true,
  })
  messages: Promise<Messages[]>;

  @ManyToMany(() => Members, (members) => members.group, {
    cascade: true,
  })
  member: Promise<Members[]>;
}
