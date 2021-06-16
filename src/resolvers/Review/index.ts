import { ReviewModel } from "../../models/Review/review.model"
import { GQLEditReview, GQLPostReview, IReviewDoc, IUserID } from "../../models/Review/review.types"
import DBWrapper from "../../wrappers/APIGenerator"
import ExciteUserResolver from "../ExciteUser"

const { getAPICalls } = new DBWrapper(ReviewModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const ReviewResolver = {
  Query: {
    async fetchReviews(_: any, prop: any): Promise<IReviewDoc[]> {
      return await Fetch() as unknown as IReviewDoc[]
    },
    async fetchReviewByID(_: any, prop: IUserID): Promise<IReviewDoc> {
      return await FetchOne(prop._id) as unknown as IReviewDoc
    }
  },

  Mutation: {
    async postReview(_: any, prop: GQLPostReview): Promise<IReviewDoc> {
      const foundUser = await ExciteUserResolver.Query.fetchExciteUserByID({}, { _id: prop.input.exciteID })
      if (foundUser.error) return foundUser as any

      const rating = (foundUser.rating + prop.input.rating) / 2
      const result = await Create(prop.input) as any
      if (result._id) {
        const reviews = foundUser.reviews.concat(result._id)
        await ExciteUserResolver.Mutation.editExciteUser({}, {
          input: {
            _id: prop.input.exciteID,
            rating,
            reviews
          }
        })
      }
      return result
    },
    async editReview(_: any, prop: GQLEditReview): Promise<IReviewDoc> {
      return await Edit(prop.input) as unknown as IReviewDoc
    },
    async removeReview(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IReviewDoc
    },
  }
}

export default ReviewResolver