import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from "typeorm";
import Group from "./Chat/Groups";
import Members from "./Chat/Members";
import Messages from "./Chat/Message";
import Comments from "./Profile/comments";
import Friends from "./Profile/Friends/Friends";
import Posts from "./Profile/posts";
import Task from "./Task";
@ObjectType()
@Entity("users")
export default class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true, nullable: true })
  userName: string;

  @Field()
  @Column("text", { nullable: true })
  firstName: string;

  @Field()
  @Column("text", { nullable: true })
  lastName: string;

  @Field()
  @CreateDateColumn()
  created: Date;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column("text")
  password: string;

  @ManyToMany(() => Task, (task) => task.users)
  @JoinTable()
  tasks: Task[];

  @ManyToMany(() => Group, (group) => group.users)
  @JoinTable()
  groups: Group[];

  @ManyToMany(() => Messages, (messages) => messages.users)
  @JoinTable()
  messages: Messages[];

  @ManyToMany(() => Friends, (friends) => friends.users)
  @JoinTable()
  friends: Friends[];

  @ManyToMany(() => Posts, (posts) => posts.users)
  @JoinTable()
  posts: Friends[];

  @ManyToMany(() => Comments, (comments) => comments.users)
  @JoinTable()
  comments: Comments[];

  @ManyToMany(() => Members, (members) => members.users)
  @JoinTable({name: 'memberId'})
  members: Members[];
}
