import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchExciteUsers: [ExciteUserDoc]
    fetchUnVerifiedUsers: [ExciteUserDoc]
    fetchVerifiedUsers: [ExciteUserDoc]
    fetchExciteUserByID(_id: String!): ExciteUserDoc
  }

  extend type Mutation {
    postExciteUser(input: IExciteUserInput!): ExciteUserDoc
    editExciteUser(input: IExciteUserEdit!): ExciteUserDoc
    verifyExciteUser(_id: String!): ExciteUserDoc
    removeExciteUser(_id: String!): ExciteUserDoc
  }

  type ExciteUserDoc {
    _id: String
    firstName: String
    middleName: String
    lastName: String
    email: String
    profession: String
    rating: Float
    profilePicture: String
    histories: [String]
    reviews: [String]
    pictures: [String]
    phoneNumber: String
    description: String
    address: AddressDoc
    minPriceForEvent: Float
    isOpenToWork: Boolean
    isVerified: Boolean
    error: ErrorType
  }

  type ResolvedExciteUserDoc {
    _id: String
    firstName: String
    middleName: String
    lastName: String
    email: String
    profession: String
    rating: Float
    profilePicture: String
    histories: [HistoryDoc]
    reviews: [ReviewDoc]
    pictures: [String]
    phoneNumber: String
    description: String
    address: AddressDoc
    minPriceForEvent: Float
    isOpenToWork: Boolean
    isVerified: Boolean
    error: ErrorType
  }
  
  input AddressInput {
    country: String
    region: String
    city: String
  }

  type AddressDoc {
    country: String
    region: String
    city: String
  }

  input IExciteUserInput {
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    profession: String!
    pictures: [String]
    phoneNumber: String
    description: String
    minPriceForEvent: Float
    isOpenToWork: Boolean
  }

  input IExciteUserEdit {
    _id: String!
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    profession: String!
    pictures: [String]
    phoneNumber: String
    description: String
    minPriceForEvent: Float
    isOpenToWork: Boolean
  }
`