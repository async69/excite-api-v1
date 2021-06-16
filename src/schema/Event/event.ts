import { gql } from "apollo-server-express"

export default gql`
  extend type Query {
    fetchEvents: [EventDoc]
    fetchEventByID(_id: String!): EventDoc
  }

  extend type Mutation {
    postEvent(input: IEventInput!): EventDoc
    editEvent(input: IEventEdit!): EventDoc
    removeEvent(_id: String!): EventDoc
  }

  type EventDoc {
    _id: String
    exciteUserID: String
    priceOffered: Float
    eventDescription: String
    date: String
    numberOfPeopleAttending: Float
    error: ErrorType
  }

  input IEventInput {
    exciteUserID: String!
    priceOffered: Float
    eventDescription: String
    date: String
    numberOfPeopleAttending: Float
  }

  input IEventEdit {
    _id: String!
    exciteUserID: String
    priceOffered: Float
    eventDescription: String
    date: String
    numberOfPeopleAttending: Float
  }
`