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

@ObjectType()
@Entity("posts")
export default class Posts extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  postId: number;

  @Field()
  @Column("text")
  postTitle: string;

  @Field()
  @Column("text")
  postDescription: string;

  @Field()
  @Column("int", {nullable: true})
  userId: number;

  @Field()
  @CreateDateColumn()
  created: Date;
  @Field()
  @UpdateDateColumn()
  updateTime: Date;

  @ManyToMany(() => User, (user) => user.posts, {
    cascade: true
  })
  users: User[]
}