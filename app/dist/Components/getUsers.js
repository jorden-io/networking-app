import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getUser } from "../depricatedGraphQl/Query";
const GetUsers = () => {
    const { error, loading, data } = useQuery(getUser);
    //const {data, loading} = useAllTasksQuery(); 
    const [users, setUsers] = useState([]);
    useEffect(() => {
        //console.log(data);
        if (data) {
            //setUsers(data.allTasks);
        }
    }, [data]);
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsx("p", { children: users.map((e) => {
                    return (_jsx("div", { children: _jsxs("p", { children: [e.email, " - ", e.id] }) }, e.id));
                }) }) }) }));
};
export default GetUsers;
