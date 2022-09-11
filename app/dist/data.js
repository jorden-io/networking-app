import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const Fetched = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const parse = await res.json();
            setData(parse);
        })();
    }, []);
    console.log(data);
    const Fetchy = () => {
        return (_jsx("div", { children: data.map((e) => {
                return (_jsx("div", { children: _jsx("p", { className: "hey", style: { boxShadow: "0px 0px 3px grey", padding: "15px" }, children: e.email }) }, e.id));
            }) }));
    };
    return { Fetchy };
};
export default Fetched;
