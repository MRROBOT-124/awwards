/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  loginUser: UserResponse;
  registerUser: UserResponse;
  submitWebsite: Website;
};


export type MutationLoginUserArgs = {
  userDetails: UserDetails;
};


export type MutationRegisterUserArgs = {
  userDetails: UserDetails;
};


export type MutationSubmitWebsiteArgs = {
  websiteInput: WebsiteDetails;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  getAllWebsites: Array<Website>;
  getUser: User;
};

export type Tags = {
  color: Scalars['String'];
  createdAt?: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt?: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['Float'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserDetails = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type Website = {
  __typename?: 'Website';
  authorName: Scalars['String'];
  company: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  imageUrl: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type WebsiteDetails = {
  _id: Scalars['Float'];
  authorName: Scalars['String'];
  company: Scalars['String'];
  createdAt: Scalars['String'];
  imageUrl: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
  tagsList?: Array<Tags>;
  updatedAt: Scalars['String'];
};

export type LoginUserMutationVariables = Exact<{
  userDetails: UserDetails;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: number, createdAt: string, email: string, updatedAt: string, username: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type RegisterUserMutationVariables = Exact<{
  userDetails: UserDetails;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: number, createdAt: string, email: string, updatedAt: string, username: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', email: string, password: string, username: string, _id: number, createdAt: string, updatedAt: string }> };


export const LoginUserDocument = gql`
    mutation LoginUser($userDetails: UserDetails!) {
  loginUser(userDetails: $userDetails) {
    user {
      _id
      createdAt
      email
      updatedAt
      username
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};
export const RegisterUserDocument = gql`
    mutation RegisterUser($userDetails: UserDetails!) {
  registerUser(userDetails: $userDetails) {
    user {
      _id
      createdAt
      email
      updatedAt
      username
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useRegisterUserMutation() {
  return Urql.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument);
};
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    email
    password
    username
    _id
    createdAt
    updatedAt
  }
}
    `;

export function useGetAllUsersQuery(options?: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>({ query: GetAllUsersDocument, ...options });
};