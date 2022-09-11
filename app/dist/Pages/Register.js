import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
const Register = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [register, { error, loading }] = useRegisterMutation();
    const addUser = () => {
        register({
            variables: {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                userName: userName,
            },
        });
        if (error) {
            console.log(error);
        }
    };
    if (loading) {
        return (_jsx(_Fragment, { children: _jsx("p", { children: "loading" }) }));
    }
    else {
        return (_jsx(_Fragment, { children: _jsxs("div", { children: [localStorage.token ? localStorage.token : '', _jsxs("form", { onSubmit: (e) => {
                            e.preventDefault();
                            addUser();
                        }, children: [_jsx("input", { type: "text", placeholder: "email", onChange: (e) => {
                                    setEmail(e.target.value);
                                } }), _jsx("input", { type: "text", placeholder: "userName", onChange: (e) => {
                                    setUserName(e.target.value);
                                } }), _jsx("input", { type: "text", placeholder: "firstName", onChange: (e) => {
                                    setFirstName(e.target.value);
                                } }), _jsx("input", { type: "text", placeholder: "lastName", onChange: (e) => {
                                    setLastName(e.target.value);
                                } }), _jsx("input", { type: "password", placeholder: "enter password", onChange: (e) => {
                                    setPassword(e.target.value);
                                } }), _jsx("button", { children: "register" })] })] }) }));
    }
};
export default Register;
