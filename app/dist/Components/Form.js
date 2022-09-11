import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
const Register = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    //const [register, { error }] = useMutation(RegisterMutation);
    const [register, { error }] = useRegisterMutation();
    const addUser = () => {
        register({
            variables: {
                email: email,
                password: password,
            },
        });
        if (error) {
            console.log(error);
        }
    };
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsxs("form", { onSubmit: (e) => {
                    e.preventDefault();
                    addUser();
                }, children: [_jsx("input", { type: "text", placeholder: "email", onChange: (e) => {
                            setEmail(e.target.value);
                        } }), _jsx("input", { type: "password", placeholder: "enter password", onChange: (e) => {
                            setPassword(e.target.value);
                        } }), _jsx("button", { children: "register" })] }) }) }));
};
export default Register;
