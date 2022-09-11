import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { useCreateTaskMutation } from "../generated/graphql";
import { GlobalContext } from "../App";
const Tasks = () => {
    const con = useContext(GlobalContext);
    const [createTask] = useCreateTaskMutation();
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [theTruth, setTheTruth] = useState(false);
    //const {data, loading, error} = useMyTaskQuery()
    const makeT = () => {
        createTask({
            variables: {
                truth: theTruth,
                task: task,
            },
        });
        setTasks(tasks);
    };
    const [userInfo, setUserInfo] = useState([]);
    // useEffect(() => {
    //   if (data) {
    //     setTasks(data.allTaskData);
    //     setUserInfo(data.getUser);
    //   }
    // }, [data]);
    return (_jsxs(_Fragment, { children: [con.x, con.y, _jsx("button", { onClick: () => setTheTruth(true), children: "set true" }), _jsx("button", { onClick: () => setTheTruth(false), children: "set false" }), _jsx("input", { onChange: (e) => {
                    setTask(e.target.value);
                } }), _jsx("button", { onClick: () => {
                    makeT();
                }, children: "make" }), _jsx("hr", {}), userInfo.map((e) => {
                return (_jsxs(_Fragment, { children: [_jsx("p", { children: e.email }), _jsx("p", { children: e.id })] }));
            }), _jsx("hr", {}), tasks.map((e) => {
                return (_jsx("div", { children: _jsx("p", { children: e.task }) }, e.id));
            })] }));
};
export default Tasks;
