import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../generated/graphql";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { data, error, loading }] = useLoginMutation();
    const submit = async () => {
        login({
            variables: {
                email: email,
                password: password,
            },
        });
    };
    useEffect(() => {
        if (data) {
            localStorage.setItem("token", data?.login.accessToken);
            window.location.reload();
        }
    }, [data]);
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsxs("form", { onSubmit: (e) => {
                    e.preventDefault();
                    submit();
                }, children: [_jsx("input", { onChange: (e) => setEmail(e.target.value), type: "email", placeholder: "enter email" }), _jsx("input", { onChange: (e) => setPassword(e.target.value), type: "password", placeholder: "enter password" }), _jsx("button", { onClick: () => {
                            window.location.reload();
                            localStorage.removeItem("token");
                        }, children: "logout" }), _jsx("button", { onClick: () => login(), children: "login" })] }) }) }));
};
export default Login;
