import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from "react";
const todoReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, complete: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
};
let switchA = [1, 2];
switchA[0] = 2;
console.log(switchA);
export class Node {
    val;
    left;
    right;
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const close = (val) => {
    const func = (val2) => {
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
const depthFirstTree = (root) => {
    const stack = [root];
    while (stack.length != 0) {
        const current = stack.pop();
        console.log(current.val);
        if (current?.right !== null)
            stack.push(current?.right);
        if (current?.left !== null)
            stack.push(current?.left);
    }
};
depthFirstTree(a);
const dispatcher = (state, action) => {
    switch (action.type) {
        case "do":
            return state.x + 10;
        default:
            return state;
    }
};
const testArray = [];
testArray.push("hey");
testArray.push("hey");
testArray.push("hey");
testArray.push("hey");
console.log([...testArray.join("")]);
const Reduce = () => {
    //const [tasks, doTask] = useReducer(dispatcher, 0);
    const [todos, dispatch] = useReducer(todoReducer, []);
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => { } }), JSON.stringify(todos), _jsx("button", { onClick: () => {
                    dispatch({ type: "add", text: "clean" });
                }, children: " " }), _jsx("button", { onClick: () => {
                    dispatch({ type: "remove", idx: 1 });
                } })] }));
};
export default Reduce;
