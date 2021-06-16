import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"

export { Query, IUserID }

export interface IEvent {
  exciteUserID: string
  priceOffered: number
  eventDescription: string
  date: string
  numberOfPeopleAttending: number
}

export interface IEventDoc extends IEvent {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IEventInput {
  reviewID: string
  content: string
}

export interface IEventEdit extends IEventInput {
  _id: string
}

export interface GQLPostEvent {
  input: IEventInput
}

export interface GQLEditEvent {
  input: IEventEdit
}

export interface IEventDocument extends IEvent, Document {}

export interface IEventModel extends IEvent, Model<IEventDocument> { }