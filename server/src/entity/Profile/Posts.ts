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
  post_id: number;

  @Field()
  @Column("text")
  post_title: string;

  @Field()
  @Column("text")
  post_description: string;

  @Field()
  @Column("int", {nullable: true})
  user_id: number;

  @Field()
  @CreateDateColumn()
  created: Date;
  @Field()
  @UpdateDateColumn()
  update_time: Date;

  @ManyToMany(() => User, (user) => user.posts, {
    cascade: true
  })
  users: User[]
}