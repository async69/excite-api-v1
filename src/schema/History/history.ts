import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchHistories: [HistoryDoc]
    fetchHistoryByID(_id: String!): HistoryDoc
  }

  extend type Mutation {
    postHistory(input: IHistoryInput!): HistoryDoc
    editHistory(input: IHistoryEdit!): HistoryDoc
    removeHistory(_id: String!): HistoryDoc
  }

  type HistoryDoc {
    _id: String
    exciteID: String
    title: String
    image: String
    description: String
    error: ErrorType
  }

  input IHistoryInput {
    exciteID: String!
    title: String!
    image: String!
    description: String
  }

  input IHistoryEdit {
    _id: String!
    exciteID: String!
    title: String
    image: String
    description: String
  }
`