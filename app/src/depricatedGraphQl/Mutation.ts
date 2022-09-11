import { gql } from "@apollo/client";
export const RegisterMutation = gql`
  mutation register($password: String!, $email: String!){
    register(email: $email password: $password)
  }
`;

