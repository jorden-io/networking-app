import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import User from "../../User";

@ObjectType()
@Entity("friends")
export default class Friends extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("int")
  yourId: number;

  @Field()
  @Column("int")
  thierId: number;

  @ManyToMany(() => User, (user) => user.friends, {
    cascade: true
  })
  users: User[]
}