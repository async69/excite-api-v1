import { CommentModel } from "../../models/Comment/comment.model"
import { GQLEditComment, GQLPostComment, ICommentDoc, IUserID } from "../../models/Comment/comment.types"
import DBWrapper from "../../wrappers/APIGenerator"
import { ReviewModel } from "../../models/Review/review.model"
import { IReviewDoc } from "../../models/Review/review.types"

const DBModel = new DBWrapper(CommentModel)
const { Create, Edit, Fetch, FetchOne, Remove } = DBModel.getAPICalls()
DBModel.setModel(ReviewModel)
const { Edit: editReview, FetchOne: fetchOneReview } = DBModel.getAPICalls()

const CommentResolver = {
  Query: {
    async fetchComments(_: any, prop: any): Promise<ICommentDoc[]> {
      return await Fetch() as unknown as ICommentDoc[]
    },
    async fetchCommentByID(_: any, prop: IUserID): Promise<ICommentDoc> {
      return await FetchOne(prop._id) as unknown as ICommentDoc
    }
  },

  Mutation: {
    async postComment(_: any, prop: GQLPostComment): Promise<ICommentDoc> {
      const result = await Create(prop.input) as unknown as ICommentDoc
      const foundReview = await fetchOneReview(prop.input.reviewID) as unknown as IReviewDoc
      if (foundReview.error) return foundReview as any
      await editReview({
        _id: prop.input.reviewID,
        comments: foundReview.comments.concat(result._id)
      })
      return {
        _id: result._id,
        ...prop.input
      } as any
    },
    async editComment(_: any, prop: GQLEditComment): Promise<ICommentDoc> {
      return await Edit(prop.input) as unknown as ICommentDoc
    },
    async removeComment(_: any, prop: any) {
      return await Remove(prop._id) as unknown as ICommentDoc
    },
  }
}

export default CommentResolver