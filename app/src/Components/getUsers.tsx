import React, { FC, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { getUser } from "../depricatedGraphQl/Query";
//import { useAllTasksQuery } from "../generated/graphql";
interface Props {}
interface User {
  email: string;
  id: number;
}
const GetUsers: FC<Props> = () => {
  const { error, loading, data } = useQuery(getUser);
//const {data, loading} = useAllTasksQuery(); 
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    //console.log(data);
    if (data) {
      //setUsers(data.allTasks);
    }
  }, [data]);

  return (
    <>
      <div>
        <p>
          {users.map((e: User) => {
            return (
              <div key={e.id}>
                <p>
                  {e.email} - {e.id}
                </p>
              </div>
            );
          })}
        </p>
      </div>
    </>
  );
};
export default GetUsers;
