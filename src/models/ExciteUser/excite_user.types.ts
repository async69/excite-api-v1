import { Document, Model, Query } from "mongoose"
import { ErrorType, IUserID } from "../../constants/interfaces"
import { IHistoryDoc } from "../History/history.types"
import { IReviewDoc } from "../Review/review.types"

export { Query, IUserID }

export enum ProfessionType {
  ACTOR = "Actor",
  MUSICIAN = "Musician",
  COMEDIAN = "Comedian",
  MODEL = "Model"
}

export interface AddressDoc {
  country: string
  region: string
  city: string
}



export interface IExciteUser {
  firstName: string
  middleName: string
  lastName: string
  email: string
  profession: ProfessionType
  rating: number
  profilePicture: string
  pictures: string[]
  phoneNumber: string
  description: string
  reviews: object[]
  histories: object[]
  address: AddressDoc
  minPriceForEvent: number
  isOpenToWork: boolean
  isVerified: boolean
}

export interface ResolvedExciteUserDoc extends IExciteUser {
  histories: IHistoryDoc[]
  reviews: IReviewDoc[]
}

export interface IExciteUserDoc extends IExciteUser {
  _id: string
  error: ErrorType
  createdAt?: string
  updatedAt?: string
}

export interface IExciteUserInput {
  firstName: string
  middleName: string
  lastName: string
  email: string
  profession: ProfessionType
  pictures: string[]
  phoneNumber: string
  description: string
  reviews: object[]
  histories: object[]
  minPriceForEvent?: number
  isOpenToWork?: string
}

export interface IExciteUserEdit {
  _id: string
  firstName?: string
  middleName?: string
  lastName?: string
  email?: string
  profession?: ProfessionType
  pictures?: string[]
  reviews?: object[]
  histories?: object[]
  phoneNumber?: string
  description?: string
  minPriceForEvent?: number
  isOpenToWork?: string
  rating?: number
}

export interface GQLPostExciteUser {
  input: IExciteUserInput
}

export interface GQLEditExciteUser {
  input: IExciteUserEdit
}

export interface IExciteUserDocument extends IExciteUser, Document {}

export interface IExciteUserModel extends IExciteUser, Model<IExciteUserDocument> { }