import { FC, useEffect, useState } from "react";
import { useUserDataQuery } from "../generated/graphql";

interface Props {}
const All: FC<Props> = () => {
  interface Group {
    description: string;
    groupId: number;
    groupName: string;
    leaderId: number;
  }

  interface User {
    firstName: string;
    lastName: string;
    userName: string;
    id: number;
    email: string;
  }

  interface Task {
    id: number;
    yourid: number;
    task: string;
    truth: boolean;
  }

  const [allGroup, setAllGroup] = useState<Array<Group>>([]);
  const [allUser, setAllUser] = useState<Array<User>>([]);
  const [allTask, setAllTask] = useState<Array<Task>>([]);
  const { data, loading } = useUserDataQuery({
    variables: {getUserByIdId: 3}
  });
  const notComp = {
    color: "red",
  };
  const comp = {
    color: "green",
  };

  useEffect(() => {
    if (data) {
      setAllGroup(data.myGroups);
      setAllUser(data.getUserById);
      setAllTask(data.myTasks);
      return () => {
        setAllGroup([]);
        setAllUser([]);
        setAllTask([]);
      };
    }
  }, [data]);

  if (loading) {
    return <h3>loading...</h3>;
  } else {
    return (
      <>
        <div>
          {allUser.map((e) => {
            return (
              <>
                <p>{e.firstName}</p>
                <p>{e.lastName}</p>
                <p>{e.email}</p>
                <p>{e.userName}</p>
                <p>{e.id}</p>
              </>
            );
          })}
          <hr></hr>
          {allGroup.map((e) => {
            return (
              <>
                <p>{e.groupName}</p>
                <p>{e.description}</p>
                <p>{e.leaderId}</p>
                <p>{e.groupId}</p>
              </>
            );
          })}
        </div>
        <div>
          <hr></hr>
          {allTask.map((e) => {
            return (
              <>
                <p style={{ cursor: "pointer" }} onClick={() => alert(e.id)}>
                  {e.id} task id
                </p>
                <p style={e.truth ? comp : notComp}>{e.task}</p>
                <p>{e.yourid}</p>
                <p>{e.truth === true ? "truthy" : "falsy"}</p>
              </>
            );
          })}
        </div>
      </>
    );
  }
};

export default All;
