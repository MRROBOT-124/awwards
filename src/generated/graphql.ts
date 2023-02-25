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
/** All built-in and custom scalars, mapped to their actual values */
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
  websiteInput: UserDetails;
};


export type MutationRegisterUserArgs = {
  websiteInput: UserDetails;
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

export type RegisterUserMutationVariables = Exact<{
  websiteInput: UserDetails;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserResponse', user?: { __typename?: 'User', _id: number, createdAt: string, email: string, password: string, updatedAt: string, username: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', email: string, password: string, username: string, _id: number, createdAt: string, updatedAt: string }> };


export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"websiteInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserDetails"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"websiteInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"websiteInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
