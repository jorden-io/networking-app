import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { matrixFind } from "./snip";
const Fetched = () => {
    const [state, setS] = useState(1);
    const [data, setData] = useState([]);
    const count = useRef(0);
    let something = true;
    import("./snip").then(matrixFind => {
    });
    matrixFind({ z: [] }, 10, 0);
    useEffect(() => {
        count.current += 1;
        (async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const parse = await res.json();
            setData(parse);
        })();
    }, [state]);
    console.log(data);
    const Fetchy = () => {
        return (_jsxs("div", { children: [_jsxs("button", { onClick: () => {
                        setS(state + 1);
                    }, children: [" ", "up state"] }), state, count.current, data.map((e) => {
                    return (_jsx("div", { children: _jsx("p", { className: "hey", style: { boxShadow: "0px 0px 3px grey", padding: "15px" }, children: e.email }) }, e.id));
                })] }));
    };
    return { Fetchy };
};
export default Fetched;
