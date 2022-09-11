import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Group = {
  __typename?: 'Group';
  created: Scalars['DateTime'];
  description: Scalars['String'];
  groupId: Scalars['Float'];
  groupName: Scalars['String'];
  leaderId: Scalars['Float'];
  updateTime: Scalars['DateTime'];
};

export type Members = {
  __typename?: 'Members';
  groupId: Scalars['Float'];
  id: Scalars['Float'];
  joined: Scalars['DateTime'];
  memberId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGroup: Scalars['Boolean'];
  createTask: Scalars['Boolean'];
  joinGroup: Scalars['Boolean'];
  leaveGroup: Scalars['Boolean'];
  login: LoginRes;
  register: Scalars['Boolean'];
};


export type MutationCreateGroupArgs = {
  description: Scalars['String'];
  groupName: Scalars['String'];
};


export type MutationCreateTaskArgs = {
  task: Scalars['String'];
  truth: Scalars['Boolean'];
};


export type MutationJoinGroupArgs = {
  groupId: Scalars['Float'];
};


export type MutationLeaveGroupArgs = {
  groupId: Scalars['Float'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allGroups: Array<Group>;
  allTaskData: Array<Task>;
  allUsers: Array<User>;
  bye: Scalars['String'];
  getGroupMembers: Array<Members>;
  getGroupUser: Array<User>;
  getMems: Array<Members>;
  getT: Array<User>;
  getTest: Array<User>;
  getUserById: Array<User>;
  myGroups: Array<Group>;
  myTasks: Array<Task>;
};


export type QueryGetGroupMembersArgs = {
  memberId: Scalars['Float'];
};


export type QueryGetGroupUserArgs = {
  memberId: Scalars['Float'];
};


export type QueryGetMemsArgs = {
  groupId: Scalars['Float'];
};


export type QueryGetTestArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float'];
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['Float'];
  task: Scalars['String'];
  truth: Scalars['Boolean'];
  yourid: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  created: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  userName: Scalars['String'];
};

export type LoginRes = {
  __typename?: 'loginRes';
  accessToken: Scalars['String'];
};

export type CreateTaskMutationVariables = Exact<{
  truth: Scalars['Boolean'];
  task: Scalars['String'];
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: boolean };

export type JoinGroupMutationVariables = Exact<{
  groupId: Scalars['Float'];
}>;


export type JoinGroupMutation = { __typename?: 'Mutation', joinGroup: boolean };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'loginRes', accessToken: string } };

export type RegisterMutationVariables = Exact<{
  userName: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: boolean };

export type UserDataQueryVariables = Exact<{
  getUserByIdId: Scalars['Float'];
}>;


export type UserDataQuery = { __typename?: 'Query', myTasks: Array<{ __typename?: 'Task', id: number, yourid: number, task: string, truth: boolean }>, getUserById: Array<{ __typename?: 'User', id: number, firstName: string, lastName: string, userName: string, email: string }>, myGroups: Array<{ __typename?: 'Group', description: string, groupId: number, groupName: string, leaderId: number }> };

export type GetGroupMembersQueryVariables = Exact<{
  memberId: Scalars['Float'];
}>;


export type GetGroupMembersQuery = { __typename?: 'Query', getGroupMembers: Array<{ __typename?: 'Members', id: number, groupId: number, memberId: number, joined: any }> };

export type GetGroupUserQueryVariables = Exact<{
  memberId: Scalars['Float'];
}>;


export type GetGroupUserQuery = { __typename?: 'Query', getGroupUser: Array<{ __typename?: 'User', id: number, userName: string, firstName: string, lastName: string, created: any, email: string }> };

export type GetMemsQueryVariables = Exact<{
  groupId: Scalars['Float'];
}>;


export type GetMemsQuery = { __typename?: 'Query', getMems: Array<{ __typename?: 'Members', groupId: number, id: number, memberId: number, joined: any }> };

export type MyTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTasksQuery = { __typename?: 'Query', myTasks: Array<{ __typename?: 'Task', id: number, task: string, yourid: number }> };


export const CreateTaskDocument = gql`
    mutation CreateTask($truth: Boolean!, $task: String!) {
  createTask(truth: $truth, task: $task)
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

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
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const JoinGroupDocument = gql`
    mutation JoinGroup($groupId: Float!) {
  joinGroup(groupId: $groupId)
}
    `;
export type JoinGroupMutationFn = Apollo.MutationFunction<JoinGroupMutation, JoinGroupMutationVariables>;

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
export function useJoinGroupMutation(baseOptions?: Apollo.MutationHookOptions<JoinGroupMutation, JoinGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinGroupMutation, JoinGroupMutationVariables>(JoinGroupDocument, options);
      }
export type JoinGroupMutationHookResult = ReturnType<typeof useJoinGroupMutation>;
export type JoinGroupMutationResult = Apollo.MutationResult<JoinGroupMutation>;
export type JoinGroupMutationOptions = Apollo.BaseMutationOptions<JoinGroupMutation, JoinGroupMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
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
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UserDataDocument = gql`
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
export function useUserDataQuery(baseOptions: Apollo.QueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, options);
      }
export function useUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, options);
        }
export type UserDataQueryHookResult = ReturnType<typeof useUserDataQuery>;
export type UserDataLazyQueryHookResult = ReturnType<typeof useUserDataLazyQuery>;
export type UserDataQueryResult = Apollo.QueryResult<UserDataQuery, UserDataQueryVariables>;
export const GetGroupMembersDocument = gql`
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
export function useGetGroupMembersQuery(baseOptions: Apollo.QueryHookOptions<GetGroupMembersQuery, GetGroupMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupMembersQuery, GetGroupMembersQueryVariables>(GetGroupMembersDocument, options);
      }
export function useGetGroupMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupMembersQuery, GetGroupMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupMembersQuery, GetGroupMembersQueryVariables>(GetGroupMembersDocument, options);
        }
export type GetGroupMembersQueryHookResult = ReturnType<typeof useGetGroupMembersQuery>;
export type GetGroupMembersLazyQueryHookResult = ReturnType<typeof useGetGroupMembersLazyQuery>;
export type GetGroupMembersQueryResult = Apollo.QueryResult<GetGroupMembersQuery, GetGroupMembersQueryVariables>;
export const GetGroupUserDocument = gql`
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
export function useGetGroupUserQuery(baseOptions: Apollo.QueryHookOptions<GetGroupUserQuery, GetGroupUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupUserQuery, GetGroupUserQueryVariables>(GetGroupUserDocument, options);
      }
export function useGetGroupUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupUserQuery, GetGroupUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupUserQuery, GetGroupUserQueryVariables>(GetGroupUserDocument, options);
        }
export type GetGroupUserQueryHookResult = ReturnType<typeof useGetGroupUserQuery>;
export type GetGroupUserLazyQueryHookResult = ReturnType<typeof useGetGroupUserLazyQuery>;
export type GetGroupUserQueryResult = Apollo.QueryResult<GetGroupUserQuery, GetGroupUserQueryVariables>;
export const GetMemsDocument = gql`
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
export function useGetMemsQuery(baseOptions: Apollo.QueryHookOptions<GetMemsQuery, GetMemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemsQuery, GetMemsQueryVariables>(GetMemsDocument, options);
      }
export function useGetMemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemsQuery, GetMemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemsQuery, GetMemsQueryVariables>(GetMemsDocument, options);
        }
export type GetMemsQueryHookResult = ReturnType<typeof useGetMemsQuery>;
export type GetMemsLazyQueryHookResult = ReturnType<typeof useGetMemsLazyQuery>;
export type GetMemsQueryResult = Apollo.QueryResult<GetMemsQuery, GetMemsQueryVariables>;
export const MyTasksDocument = gql`
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
export function useMyTasksQuery(baseOptions?: Apollo.QueryHookOptions<MyTasksQuery, MyTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyTasksQuery, MyTasksQueryVariables>(MyTasksDocument, options);
      }
export function useMyTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTasksQuery, MyTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyTasksQuery, MyTasksQueryVariables>(MyTasksDocument, options);
        }
export type MyTasksQueryHookResult = ReturnType<typeof useMyTasksQuery>;
export type MyTasksLazyQueryHookResult = ReturnType<typeof useMyTasksLazyQuery>;
export type MyTasksQueryResult = Apollo.QueryResult<MyTasksQuery, MyTasksQueryVariables>;