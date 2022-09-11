export default null; 
// import React, { FC, useState } from "react";
// import { RegisterMutation } from "../depricatedGraphQl/Mutation";
// import { useMutation } from "@apollo/client";
// import { useLoginMutation, useRegisterMutation } from "../generated/graphql";
// interface Props {}
// const Register: FC<Props> = () => {
//   const [password, setPassword] = useState<string>("");
//   const [email, setEmail] = useState<string>("");

//   //const [register, { error }] = useMutation(RegisterMutation);
//   const [register, {error}] = useRegisterMutation(); 
//   const [Login, {loading, data}] = useLoginMutation();
//   const Log = () => {
// Login({
//   variables: {
//     email: email,
//     password: password
//   }
// })
// if(data){
//   localStorage.setItem("token", data.login.accessToken)
//   //alert(data.login.accessToken);
// }
//   }
//   const addUser = () => {
//     register({
//       variables: {
//         email: email,
//         password: password,
//       },
//     });
//     if (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <div>
//         {localStorage.token ? localStorage.token: ''}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             //addUser();
//           }}
//         >
//           <input
//             type="text"
//             placeholder="email"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <input
//             type="password"
//             placeholder="enter password"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <button>register</button>
//           <button onClick={() =>Log()}></button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default Register;
