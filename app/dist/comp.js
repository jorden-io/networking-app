import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const main = () => {
    const TestR = (params) => {
        const newThing = params.index + 1;
        return { p: { index: 10, name: "jorden" } };
    };
    console.log(TestR({ index: 110, name: "jorden" }));
    const Bunc = (props) => {
        const [state, setState] = useState(0);
        const [list, setList] = useState([]);
        return (_jsxs(_Fragment, { children: [_jsx("p", {}), props.name, " ", props.id, " ", _jsx("button", { onClick: () => setList((pre) => [...pre, "joe"]), children: "push" }), _jsx("p", { children: list.map((el) => (_jsx("p", { children: el }))) }), _jsx("button", { onClick: () => setState(state + 1), children: "+" }), state] }));
    };
    const l = [];
    const check = (name) => {
        return 111;
    };
    let Func = (obj) => {
        console.log(obj);
    };
    Func({ ramen: "chicken", order: 10 });
    let arr = [1, 2, 3];
    arr.map((e) => {
        return _jsx("p", { children: e + 1 });
    });
    return { Bunc, Func };
};
export default main;
