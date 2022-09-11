import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo, createContext, } from "react";
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
export const GlobalContext = createContext({ x: 10, y: 'hey' });
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            //alert(message);
        });
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
    const { PokiDisplayer } = MainPoki();
    const { Bunc } = main();
    const [slut, setSlut] = useState(false);
    const dat = new Date();
    const { Fetchy } = Fetched();
    const hey = useMemo(() => { }, [slut]);
    return (_jsx(ApolloProvider, { client: client, children: _jsx(BrowserRouter, { children: _jsxs(GlobalContext.Provider, { value: { x: 10, y: "hey doods" }, children: [_jsx(NavBar, { name: 'jorby' }), _jsx("div", { className: "App", children: _jsx(Mems, {}) }), _jsxs(Routes, { children: [_jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/chat", element: _jsx(Chat, {}) }), _jsx(Route, { path: "/home", element: _jsx(Home, {}) })] })] }) }) }));
};
export default App;
