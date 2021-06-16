import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchUsers: [UserDoc]
    fetchUserByID(_id: String!): UserDoc
  }

  extend type Mutation {
    signUp(input: IUserInput!): UserDoc
    login(input: IUserInput!): UserDoc
    editUser(input: IUserEdit!): UserDoc
    removeUser(_id: String!): UserDoc
  }

  type UserDoc {
    _id: String
    username: String
    password: String
    exciteUserID: String
    error: ErrorType
  }

  input IUserInput {
    username: String!
    password: String!
  }

  input IUserEdit {
    _id: String!
    username: String
    password: String
    exciteUserID: String
  }
`