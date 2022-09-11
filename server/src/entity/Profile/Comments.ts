import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import User from "../User";
//import User from "./User";

@ObjectType()
@Entity("comments")
export default class Comments extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  commentId: number;

  @Field()
  @Column("text")
  comment: string;

  @Field()
  @Column("int")
  userId: number;

  @Field()
  @Column("int")
  postId: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  upated: Date;

  @ManyToMany(() => User, (user) => user.comments, {
    cascade: true,
  })
  users: User[];
}
