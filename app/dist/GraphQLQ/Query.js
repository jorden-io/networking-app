import { gql } from "@apollo/client";
export const getUser = gql `
  query AllUsers {
    allUsers {
      email
      id
    }
  }
`;
export const getTasks = gql `
  query allTasks {
    allTasks {
      id
      task
    }
  }
`;
