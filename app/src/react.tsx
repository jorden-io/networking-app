import React, { FC } from "react";
import { matrixFind } from "./snip";

interface Props {
  x: number;
  tar: number;
}
const Reac: FC<Props> = ({ x, tar }) => {
  const newM = matrixFind(
    {
      z: [
        [1, 2, 3],
        [1, 8, 9],
        [7, 8, 9],
      ],
    },
    tar,
    0
  );
  return (
    <>
      {newM} - {x}
    </>
  );
};

export default Reac;
