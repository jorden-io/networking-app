import React, { FC } from "react";
interface Props {
  x: boolean;
  setSlut: (p: boolean) => void;
}
const Man: FC<Props> = ({ x, setSlut }) => {
  const Kid = () => {
    return <p onClick={() => setSlut(false)}>close</p>;
  };
  return (
    <>
      {x ? (
        <>
          <h1>true</h1>
          <Kid />
          <button onClick={() => alert("gey")}> gay btn</button>
        </>
      ) : (
        <p>falsy</p>
      )}
    </>
  );
};
export default Man;
