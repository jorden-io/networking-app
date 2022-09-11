import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const CreateTaskDocument = gql `
    mutation CreateTask($truth: Boolean!, $task: String!) {
  createTask(truth: $truth, task: $task)
}
    `;
/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      truth: // value for 'truth'
 *      task: // value for 'task'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(CreateTaskDocument, options);
}
export const JoinGroupDocument = gql `
    mutation JoinGroup($groupId: Float!) {
  joinGroup(groupId: $groupId)
}
    `;
/**
 * __useJoinGroupMutation__
 *
 * To run a mutation, you first call `useJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinGroupMutation, { data, loading, error }] = useJoinGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useJoinGroupMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(JoinGroupDocument, options);
}
export const LoginDocument = gql `
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    accessToken
  }
}
    `;
/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(LoginDocument, options);
}
export const RegisterDocument = gql `
    mutation Register($userName: String!, $lastName: String!, $firstName: String!, $password: String!, $email: String!) {
  register(
    userName: $userName
    lastName: $lastName
    firstName: $firstName
    password: $password
    email: $email
  )
}
    `;
/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      userName: // value for 'userName'
 *      lastName: // value for 'lastName'
 *      firstName: // value for 'firstName'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(RegisterDocument, options);
}
export const UserDataDocument = gql `
    query userData($getUserByIdId: Float!) {
  myTasks {
    id
    yourid
    task
    truth
  }
  getUserById(id: $getUserByIdId) {
    id
    firstName
    lastName
    userName
    email
  }
  myGroups {
    description
    groupId
    groupName
    leaderId
  }
}
    `;
/**
 * __useUserDataQuery__
 *
 * To run a query within a React component, call `useUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDataQuery({
 *   variables: {
 *      getUserByIdId: // value for 'getUserByIdId'
 *   },
 * });
 */
export function useUserDataQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(UserDataDocument, options);
}
export function useUserDataLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(UserDataDocument, options);
}
export const GetGroupMembersDocument = gql `
    query GetGroupMembers($memberId: Float!) {
  getGroupMembers(memberId: $memberId) {
    id
    groupId
    memberId
    joined
  }
}
    `;
/**
 * __useGetGroupMembersQuery__
 *
 * To run a query within a React component, call `useGetGroupMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupMembersQuery({
 *   variables: {
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useGetGroupMembersQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(GetGroupMembersDocument, options);
}
export function useGetGroupMembersLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(GetGroupMembersDocument, options);
}
export const GetGroupUserDocument = gql `
    query GetGroupUser($memberId: Float!) {
  getGroupUser(memberId: $memberId) {
    id
    userName
    firstName
    lastName
    created
    email
  }
}
    `;
/**
 * __useGetGroupUserQuery__
 *
 * To run a query within a React component, call `useGetGroupUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupUserQuery({
 *   variables: {
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useGetGroupUserQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(GetGroupUserDocument, options);
}
export function useGetGroupUserLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(GetGroupUserDocument, options);
}
export const GetMemsDocument = gql `
    query GetMems($groupId: Float!) {
  getMems(groupId: $groupId) {
    groupId
    id
    memberId
    joined
  }
}
    `;
/**
 * __useGetMemsQuery__
 *
 * To run a query within a React component, call `useGetMemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemsQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetMemsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(GetMemsDocument, options);
}
export function useGetMemsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(GetMemsDocument, options);
}
export const MyTasksDocument = gql `
    query myTasks {
  myTasks {
    id
    task
    yourid
  }
}
    `;
/**
 * __useMyTasksQuery__
 *
 * To run a query within a React component, call `useMyTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyTasksQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(MyTasksDocument, options);
}
export function useMyTasksLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(MyTasksDocument, options);
}
