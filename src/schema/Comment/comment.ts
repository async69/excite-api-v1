import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchComments: [CommentDoc]
    fetchCommentByID(_id: String!): CommentDoc
  }

  extend type Mutation {
    postComment(input: ICommentInput!): CommentDoc
    editComment(input: ICommentEdit!): CommentDoc
    removeComment(_id: String!): CommentDoc
  }

  type CommentDoc {
    _id: String
    reviewID: String
    content: String
    error: ErrorType
  }

  input ICommentInput {
    reviewID: String!
    content: String!
  }

  input ICommentEdit {
    _id: String!
    reviewID: String
    content: String
  }
`