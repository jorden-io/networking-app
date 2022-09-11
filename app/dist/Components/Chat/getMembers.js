import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useGetGroupUserQuery, useGetMemsQuery } from "../../generated/graphql";
const Mems = () => {
    const [members, setMembers] = useState([]);
    const { loading } = useGetGroupUserQuery({
        variables: { memberId: 4 },
    });
    const { data } = useGetMemsQuery({ variables: { groupId: 2 } });
    useEffect(() => {
        if (data) {
            setMembers(data.getMems);
        }
    }, [data]);
    return (_jsx(_Fragment, { children: _jsx("div", { children: members.map((e) => {
                return (_jsxs(_Fragment, { children: [_jsx("h4", { children: "group" }), _jsx("p", { children: e.groupId }), _jsx("p", { children: e.id }), _jsx("p", { children: e.memberId })] }));
            }) }) }));
};
export default Mems;
