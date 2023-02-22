import React, {
  FC,
  useState,
  useMemo,
  createContext,
  useEffect,
} from "react";
import logo from "./logo.svg";
//import "./App.css";
import "./distCSS/main.css";
import {} from "./gen";
import MainPoki from "./test";
import Fetched from "./data";
import { Route, Router, BrowserRouter, Routes, Link } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";
import GetUsers from "./Components/getUsers";
import Tasks from "./Components/tasks";
import Register from "./Pages/Register";
import Profile from "./Components/ProfileComponents/profile";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import NavBar from "./Components/navbar";
import All from "./Components/allData";
import Mems from "./Components/Chat/getMembers";
interface Make {
  x: number;
  y: string;
}
export const GlobalContext = createContext<Make>({ x: 10, y: "hey" });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {});
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
interface Pwopy {
  x: string;
}
const App: FC = () => {
  useEffect(() => {
    (async (id: number) => {
      try {
        const res = await fetch(`http://localhost:8000/getUsers/${id}`);
        const parseRes = await res.json();
        console.log(parseRes);
        setData(parseRes.data);
      } catch (err) {
        console.log(err);
      }
    })(2);
    return () => {
      setData([]);
    };
  }, []);
  interface User {
    created: string;
    id: number;
    firstName: string;
    lastName: string;
    user_email: string;
    password: string;
  }
  const [fetchedData, setData] = useState<User[]>([]);
  const { Fetchy } = Fetched();
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalContext.Provider value={{ x: 10, y: "hey doods" }}>
          <NavBar name={"jorby"} />
          {fetchedData.map((e) => {
            return (
              <>
                <div
                  style={{
                    background: "grey",
                    padding: "20px",
                    margin: "20px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px black",
                  }}
                  key={e.id}
                >
                  <p onClick={() => alert(e.id)}>{e.id}</p>
                  <p>{e.created}</p>
                  <p>{e.firstName}</p>
                  <p>{e.lastName}</p>
                  <p>{e.user_email}</p>
                </div>
              </>
            );
          })}
          <div className="App">
            <Mems />
            <Fetchy />
          </div>
          <Routes>
            {/* <Route element={ProtectedRoutes}> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/home" element={<Home />} />
            {/* </Route> */}
          </Routes>
        </GlobalContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;
