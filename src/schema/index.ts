import { gql } from "apollo-server-express"
import User from "./User/user"
import Review from "./Review/review"
import Comment from "./Comment/comment"
import History from "./History/history"
import ExciteUser from "./ExciteUser/excite_user"
import Event from "./Event/event"

const Linker = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
  type ErrorType {
    type: Int
    message: String
  }
`

export default [
  Linker, User, Review, Comment, History, ExciteUser, Event
]