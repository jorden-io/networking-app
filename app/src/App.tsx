import React, {
  FC,
  useState,
  useMemo,
  useContext,
  createContext,
  useReducer,
} from "react";
import Person from "./Class";
import logo from "./logo.svg";
//import "./App.css";
import "./distCSS/main.css";
import main from "./comp";
import {} from './gen'
import { idk } from "./interface";
import MainPoki from "./test";
import Dik, { Matrix, matrixFind } from "./snip";
import Man from "./sr";
import Reac from "./react";
import Reduce from "./Reducer";
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
export const GlobalContext = createContext<Make>({x: 10, y: 'hey'});
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
interface Pwopy {
  x: string
}
const App: FC = () => {
  const { PokiDisplayer } = MainPoki();
  const { Bunc } = main();
  const [slut, setSlut] = useState<boolean>(false);
  const dat = new Date();
  const { Fetchy } = Fetched();
  const hey = useMemo(() => {}, [slut]);
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalContext.Provider value={{ x: 10, y: "hey doods" }}>
          <NavBar name={'jorby'} />
          <div className="App">
            {/* <div className="circle"></div>
            <Register />
            <GetUsers />*/}
            <Mems />
            {/* <All /> */}
            {/* <Tasks />  */}
            <Fetchy />
        {/* <Reduce /> */}
            {/* <Reac x={90} tar={100} />
            <Man x={slut} setSlut={setSlut} />
            <Dik x={10} />
            <button
              onClick={() => {
                setSlut(true);
              }}
            >
              setter
            </button> */}
            {/* {dat.getMinutes()} date */}
            {/* <PokiDisplayer /> */}
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header> */}
            {/* <Bunc name={"jorden"} id={10} getId={() => 11} /> */}
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
