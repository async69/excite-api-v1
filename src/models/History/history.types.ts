import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IHistory {
  userID: string
  title: string
  image: string
  description: string
}

export interface IHistoryDoc extends IHistory {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IHistoryInput {
  userID: string
  title: string
  image: string
  description: string
}

export interface IHistoryEdit extends IHistoryInput {
  _id: string
}

export interface GQLPostHistory {
  input: IHistoryInput
}

export interface GQLEditHistory {
  input: IHistoryEdit
}

export interface IHistoryDocument extends IHistory, Document {}

export interface IHistoryModel extends IHistory, Model<IHistoryDocument> { }