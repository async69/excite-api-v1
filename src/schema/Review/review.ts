import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchReviews: [ReviewDoc]
    fetchReviewByID(_id: String!): ReviewDoc
  }

  extend type Mutation {
    postReview(input: IReviewInput!): ReviewDoc
    editReview(input: IReviewEdit!): ReviewDoc
    removeReview(_id: String!): ReviewDoc
  }

  type ReviewDoc {
    _id: String
    userID: String
    content: String
    comments: [String]
    error: ErrorType
  }

  input IReviewInput {
    userID: String!
    content: String!
    rating: Float!
    exciteID: String!
  }

  input IReviewEdit {
    _id: String!
    userID: String
    content: String
    rating: Float
    exciteID: String
  }
`