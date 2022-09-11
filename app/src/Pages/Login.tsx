import React, { FC, useEffect, useState } from "react";
import { useLoginMutation } from "../generated/graphql";
interface Props {}
const Login: FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            placeholder={"enter email"}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder={"enter password"}
          />
          <button onClick={() => {
            window.location.reload()
            localStorage.removeItem("token")}}>
            logout
          </button>
          <button onClick={() => login()}>login</button>
        </form>
      </div>
    </>
  );
};
export default Login;
