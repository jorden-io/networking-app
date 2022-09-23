import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useUserDataQuery } from "../generated/graphql";
const All = () => {
    const [allGroup, setAllGroup] = useState([]);
    const [allUser, setAllUser] = useState([]);
    const [allTask, setAllTask] = useState([]);
    const { data, loading } = useUserDataQuery({
        variables: { getUserByIdId: 3 },
    });
    const notComp = {
        color: "red",
    };
    const comp = {
        color: "green",
    };
    useEffect(() => {
        if (data) {
            setAllGroup(data.myGroups);
            setAllUser(data.getUserById);
            setAllTask(data.myTasks);
            return () => {
                setAllGroup([]);
                setAllUser([]);
                setAllTask([]);
            };
        }
    }, [data]);
    if (loading) {
        return _jsx("h3", { children: "loading..." });
    }
    else {
        return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [allUser.map((e) => {
                            return (_jsxs(_Fragment, { children: [_jsx("p", { children: e.firstName }), _jsx("p", { children: e.lastName }), _jsx("p", { children: e.email }), _jsx("p", { children: e.userName }), _jsx("p", { children: e.id })] }));
                        }), _jsx("hr", {}), allGroup.map((e) => {
                            return (_jsxs(_Fragment, { children: [_jsx("p", { children: e.groupName }), _jsx("p", { children: e.description }), _jsx("p", { children: e.leaderId }), _jsx("p", { children: e.groupId })] }));
                        })] }), _jsxs("div", { children: [_jsx("hr", {}), allTask.map((e) => {
                            return (_jsxs(_Fragment, { children: [_jsxs("p", { style: { cursor: "pointer" }, onClick: () => alert(e.id), children: [e.id, " task id"] }), _jsx("p", { style: e.truth ? comp : notComp, children: e.task }), _jsx("p", { children: e.yourid }), _jsx("p", { children: e.truth === true ? "truthy" : "falsy" })] }));
                        })] })] }));
    }
};
export default All;
