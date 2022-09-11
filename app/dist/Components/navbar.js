import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiLogIn, BiMessageAlt, BiUser, BiMenu, } from "react-icons/bi";
import "../distCSS/NavBar/nav-bar.css";
const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
};
const NavBar = ({ name }) => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "nav-container", children: _jsxs("nav", { children: [_jsx("button", { className: "side-nav-btn", children: _jsx(BiMenu, {}) }), _jsx("a", { children: _jsx(Link, { to: "/profile", children: _jsx(BiUser, {}) }) }), _jsx("a", { children: _jsx(Link, { to: "/login", children: _jsx(BiLogIn, {}) }) }), _jsx("a", { children: _jsx(Link, { to: "/chat", children: _jsx(BiMessageAlt, {}) }) }), _jsx("a", { children: _jsx(Link, { to: "/home", children: _jsx(BiHomeAlt, {}) }) }), _jsx("button", { onClick: logOut, children: name })] }) }) }));
};
export default NavBar;
