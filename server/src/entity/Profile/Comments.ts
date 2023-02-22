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

@ObjectType()
@Entity("comments")
export default class Comments extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Field()
  @Column("text")
  comment: string;

  @Field()
  @Column("int")
  user_id: number;

  @Field()
  @Column("int")
  post_id: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  upated: Date;

  @ManyToMany(() => User, (user) => user.comments, {
    cascade: true,
  })
  users: User[];
}
