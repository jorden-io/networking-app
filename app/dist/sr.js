import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Man = ({ x, setSlut }) => {
    const Kid = () => {
        return _jsx("p", { onClick: () => setSlut(false), children: "close" });
    };
    return (_jsx(_Fragment, { children: x ? (_jsxs(_Fragment, { children: [_jsx("h1", { children: "true" }), _jsx(Kid, {}), _jsx("button", { onClick: () => alert("gey"), children: " gay btn" })] })) : (_jsx("p", { children: "falsy" })) }));
};
export default Man;
