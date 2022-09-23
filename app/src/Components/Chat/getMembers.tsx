import React, { FC, useEffect, useState } from "react";
import { useGetGroupUserQuery, useGetMemsQuery } from "../../generated/graphql";

interface Props {}

interface Member {
  id: number;
  groupId: number;
  memberId: number;
}

const Mems: FC<Props> = () => {
  const [members, setMembers] = useState<Array<Member>>([]);
  const { loading } = useGetGroupUserQuery({
    variables: { memberId: 4 },
  });
  const { data } = useGetMemsQuery({ variables: { groupId: 2 } });

  useEffect(() => {
    if (data) {
      setMembers(data.getMems);
    }
  }, [data]);

  return (
    <>
      <div>
        {members.map((e) => {
          return (
            <>
              <h4>group</h4>
              <p>{e.groupId}</p>
              <p>{e.id}</p>
              <p>{e.memberId}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Mems;
