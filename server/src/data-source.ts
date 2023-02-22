import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./entity/User";
import Task from "./entity/Task";
import Group from "./entity/Chat/Groups";
import Messages from "./entity/Chat/Message";
import Friends from "./entity/Profile/Friends/Friends";
import Comments from "./entity/Profile/comments";
import Posts from "./entity/Profile/posts";
import Members from "./entity/Chat/Members";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "jorby",
  password: process.env.DB_PASSWORD,
  database: "test3",
  synchronize: true,
  logging: false,
  entities: [User, Task, Group, Messages, Friends, Comments, Posts, Members],
  migrations: [],
  subscribers: [],
});
