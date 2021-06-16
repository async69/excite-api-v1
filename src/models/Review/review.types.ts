import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IReview {
  userID: string
  content: string
  exciteID: string
  comments: string[]
  rating: number
}

export interface IReviewDoc extends IReview {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IReviewInput {
  userID: string
  content: string
  rating: number
  exciteID: string
}

export interface IReviewEdit extends IReviewInput {
  _id: string
}

export interface GQLPostReview {
  input: IReviewInput
}

export interface GQLEditReview {
  input: IReviewEdit
}

export interface IReviewDocument extends IReview, Document {}

export interface IReviewModel extends IReview, Model<IReviewDocument> { }