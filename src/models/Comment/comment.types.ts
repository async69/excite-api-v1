import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IComment {
  reviewID: string
  content: string
}

export interface ICommentDoc extends IComment {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface ICommentInput {
  reviewID: string
  content: string
}

export interface ICommentEdit extends ICommentInput {
  _id: string
}

export interface GQLPostComment {
  input: ICommentInput
}

export interface GQLEditComment {
  input: ICommentEdit
}

export interface ICommentDocument extends IComment, Document {}

export interface ICommentModel extends IComment, Model<ICommentDocument> { }