/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation LoginUser($userDetails: UserDetails!) {\n  loginUser(userDetails: $userDetails) {\n    user {\n      _id\n      createdAt\n      email\n      updatedAt\n      username\n    }\n    errors {\n      field\n      message\n    }\n  }\n}": types.LoginUserDocument,
    "mutation RegisterUser($userDetails: UserDetails!) {\n  registerUser(userDetails: $userDetails) {\n    user {\n      _id\n      createdAt\n      email\n      updatedAt\n      username\n    }\n    errors {\n      field\n      message\n    }\n  }\n}": types.RegisterUserDocument,
    "query GetAllUsers {\n  getAllUsers {\n    email\n    password\n    username\n    _id\n    createdAt\n    updatedAt\n  }\n}": types.GetAllUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LoginUser($userDetails: UserDetails!) {\n  loginUser(userDetails: $userDetails) {\n    user {\n      _id\n      createdAt\n      email\n      updatedAt\n      username\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"): (typeof documents)["mutation LoginUser($userDetails: UserDetails!) {\n  loginUser(userDetails: $userDetails) {\n    user {\n      _id\n      createdAt\n      email\n      updatedAt\n      username\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RegisterUser($userDetails: UserDetails!) {\n  registerUser(userDetails: $userDetails) {\n    user {\n      _id\n      createdAt\n      email\n      updatedAt\n      username\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"): (typeof documents)["mutation RegisterUser($userDetails: UserDetails!) {\n  registerUser(userDetails: $userDetails) {\n    user {\n      _id\n      createdAt\n      email\n      updatedAt\n      username\n    }\n    errors {\n      field\n      message\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllUsers {\n  getAllUsers {\n    email\n    password\n    username\n    _id\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetAllUsers {\n  getAllUsers {\n    email\n    password\n    username\n    _id\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;