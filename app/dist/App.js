import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo, createContext, useEffect, } from "react";
//import "./App.css";
import "./distCSS/main.css";
import main from "./comp";
import MainPoki from "./test";
import Fetched from "./data";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, ApolloLink, } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import NavBar from "./Components/navbar";
import Mems from "./Components/Chat/getMembers";
export const GlobalContext = createContext({ x: 10, y: "hey" });
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => { });
    }
});
const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.token;
    //CHECK
    if (token) {
        operation.setContext({
            headers: {
                authorization: token ? `bearer ${token}` : "",
            },
        });
    }
    return forward(operation);
});
const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
});
const App = () => {
    useEffect(() => {
        (async (id) => {
            try {
                const res = await fetch(`http://localhost:8000/getUsers/${id}`);
                const parseRes = await res.json();
                console.log(parseRes);
                setData(parseRes.data);
            }
            catch (err) {
                console.log(err);
            }
        })(2);
        return () => {
            setData([]);
        };
    }, []);
    const [fetchedData, setData] = useState([]);
    const { PokiDisplayer } = MainPoki();
    const { Bunc } = main();
    const [slut, setSlut] = useState(false);
    const dat = new Date();
    const { Fetchy } = Fetched();
    const hey = useMemo(() => { }, [slut]);
    return (_jsx(ApolloProvider, { client: client, children: _jsx(BrowserRouter, { children: _jsxs(GlobalContext.Provider, { value: { x: 10, y: "hey doods" }, children: [_jsx(NavBar, { name: "jorby" }), fetchedData.map((e) => {
                        return (_jsx(_Fragment, { children: _jsxs("div", { style: {
                                    background: "grey",
                                    padding: "20px",
                                    margin: "20px",
                                    borderRadius: "5px",
                                    boxShadow: "0px 0px 5px black",
                                }, children: [_jsx("p", { onClick: () => alert(e.id), children: e.id }), _jsx("p", { children: e.created }), _jsx("p", { children: e.firstName }), _jsx("p", { children: e.lastName }), _jsx("p", { children: e.user_email })] }, e.id) }));
                    }), _jsxs("div", { className: "App", children: [_jsx(Mems, {}), _jsx(Fetchy, {})] }), _jsxs(Routes, { children: [_jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/chat", element: _jsx(Chat, {}) }), _jsx(Route, { path: "/home", element: _jsx(Home, {}) })] })] }) }) }));
};
export default App;
