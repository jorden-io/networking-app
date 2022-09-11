import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import User from "./User";

@ObjectType()
@Entity("task")
export default class Task extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  task: string;

  @Field()
  @Column("int", {nullable: true})
  yourid: number;

  @ManyToMany(() => User, (user) => user.tasks, {
    cascade: true
  })
  users: User[]
  
  @Field()
  @Column('bool', {default: false})
  truth: boolean;
}