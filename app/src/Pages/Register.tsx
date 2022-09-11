import React, { FC, useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
interface Props {}
const Register: FC<Props> = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>(""); 
  const [lastName, setLastName] = useState<string>(""); 
  const [userName, setUserName] = useState<string>(""); 
  const [register, {error, loading}] = useRegisterMutation(); 

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
  if(loading){
    return (
        <>
       <p>loading</p> 
        </>
    )
  } else{
  return (
    <>
      <div>
        {localStorage.token ? localStorage.token: ''}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addUser();
          }}
        >
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="userName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>register</button>
        </form>
      </div>
    </>
  );
}
};
export default Register;
