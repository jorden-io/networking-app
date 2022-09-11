import React, { FC, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getTasks } from "../depricatedGraphQl/Query";
import { useCreateTaskMutation } from "../generated/graphql";
import { GlobalContext } from "../App";
interface Props {}
interface Task {
  id: number;
  task: string;
}
const Tasks: FC<Props> = () => {
  const con = useContext(GlobalContext);
  const [createTask] = useCreateTaskMutation();
  const [tasks, setTasks] = useState<any>([]);
  const [task, setTask] = useState<string>("");
  const [theTruth, setTheTruth] = useState<boolean>(false);
  //const {data, loading, error} = useMyTaskQuery()
  const makeT = () => {
    createTask({
      variables: {
        truth: theTruth,
        task: task,
      },
    });
    setTasks(tasks);
  };
  //const { data, loading } = useGetUserQuery();
  //const { error, loading, data } = useQuery(getTasks);
  //const { data, loading } = useAllTasksQuery();
  interface User {
    id: number;
    email: string;
  }
  const [userInfo, setUserInfo] = useState<Array<User>>([]);
  // useEffect(() => {
  //   if (data) {
  //     setTasks(data.allTaskData);
  //     setUserInfo(data.getUser);
  //   }
  // }, [data]);
    return (
      <>
        {con.x}
        {con.y}
        <button onClick={() => setTheTruth(true)}>set true</button>
        <button onClick={() => setTheTruth(false)}>set false</button>
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            makeT();
          }}
        >
          make
        </button>
        <hr></hr>
        {userInfo.map((e) => {
          return (
            <>
              <p>{e.email}</p>
              <p>{e.id}</p>
            </>
          );
        })}
        <hr></hr>
        {tasks.map((e: Task) => {
          return (
            <div key={e.id}>
              <p>{e.task}</p>
            </div>
          );
        })}
      </>
    );
};
export default Tasks;
