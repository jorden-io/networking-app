import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const MainPoki = () => {
    const arr = [];
    arr[0] = 100;
    console.log(arr[0]);
    const [person, setPerson] = useState([]);
    const [short, setShort] = useState();
    useEffect(() => {
        (async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const parseRes = await res.json();
            setPerson(parseRes);
            setShort(JSON.stringify(parseRes));
        })();
    }, []);
    console.log(short);
    //  console.log(person)
    const PokiDisplayer = () => {
        return (_jsxs("div", { children: [short, person.map((e) => (_jsxs("div", { children: [_jsx("p", { children: e.name }), _jsx("p", { children: e.email }), _jsx("p", { children: e.company.name }), _jsxs("p", { children: [e.company.catchPhrase, " Phrase\uD83D\uDE01"] }), _jsx("p", { children: e.company.bs })] }, e.id)))] }));
    };
    return { PokiDisplayer };
};
export default MainPoki;
