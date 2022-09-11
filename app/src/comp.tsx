import React, { useState, FC } from "react";
import { Pwops } from "./interface";

const main = () => {
  interface Params {
    index: number;
    name?: string;
  }
  interface Val {
    p: Params;
  }
  const TestR = (params: Params): Val => {
    const newThing = params.index + 1;
    return { p: { index: 10, name: "jorden" } };
  };
  console.log(TestR({ index: 110, name: "jorden" }));
  const Bunc: FC<Pwops> = (props: Pwops) => {
    const [state, setState] = useState<number>(0);
    const [list, setList] = useState<string[]>([]);
    return (
      <>
        <p></p>
        {props.name} {props.id}{" "}
        <button onClick={() => setList((pre) => [...pre, "joe"])}>push</button>
        <p>
          {list.map((el) => (
            <p>{el}</p>
          ))}
        </p>
        <button onClick={() => setState(state + 1)}>+</button>
        {state}
      </>
    );
  };

  const l: Array<string | null> = [];

  interface myOBJ {
    ramen: string;
    order: number;
  }
  const check = (name?: string): number => {
    return 111;
  };

  let Func = (obj: myOBJ) => {
    console.log(obj);
  };
  Func({ ramen: "chicken", order: 10 });

  let arr: number[] = [1, 2, 3];
  arr.map((e) => {
    return <p>{e + 1}</p>;
  });
  return { Bunc, Func };
};

export default main;
