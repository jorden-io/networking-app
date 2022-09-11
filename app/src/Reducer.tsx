import React, { FC, ReactElement, useReducer } from "react";
type Actions =
  | {
      type: "add";
      text: string;
    }
  | {
      type: "remove";
      idx: number;
    };
interface Todo {
  text: string;
  complete: boolean;
}
type State = Todo[];
const todoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    default:
      return state;
  }
};
type initState = {
  x: 0;
};
type initActions = {
  type: "do";
  y: number;
};
let switchA: number[] = [1, 2];
switchA[0] = 2;
console.log(switchA);
export class Node {
  val: string | number;
  left: Node | null;
  right: Node | null;
  constructor(val: string | number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const close = (val: number): any => {
  const func = (val2: number) => {
    return val + val2;
  };
  return func;
};
const testy = close(10);
console.log(testy(15));
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.right = c;
a.left = b;
b.left = d;
b.right = e;
c.right = f;

const depthFirstTree = (root: Node): void => {
  const stack: Array<Node> = [root];
  while (stack.length != 0) {
    const current: any = stack.pop();
    console.log(current.val);
    if (current?.right !== null) stack.push(current?.right);
    if (current?.left !== null) stack.push(current?.left);
  }
};
depthFirstTree(a);
const dispatcher = (state: initState, action: initActions) => {
  switch (action.type) {
    case "do":
      return state.x + 10;
    default:
      return state;
  }
};
const testArray: Array<any> = [];
testArray.push("hey");
testArray.push("hey");
testArray.push("hey");
testArray.push("hey");
console.log([...testArray.join("")]);
const Reduce: FC = () => {
  //const [tasks, doTask] = useReducer(dispatcher, 0);
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <>
      <button onClick={() => {}}></button>
      {/* <p>{tasks}</p> */}
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "clean" });
        }}
      >
        {" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "remove", idx: 1 });
        }}
      ></button>
    </>
  );
};
export default Reduce;
