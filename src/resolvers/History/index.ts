import { HistoryModel } from "../../models/History/history.model"
import { GQLEditHistory, GQLPostHistory, IHistoryDoc, IUserID } from "../../models/History/history.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(HistoryModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const HistoryResolver = {
  Query: {
    async fetchHistories(_: any, prop: any): Promise<IHistoryDoc[]> {
      return await Fetch() as unknown as IHistoryDoc[]
    },
    async fetchHistoryByID(_: any, prop: IUserID): Promise<IHistoryDoc> {
      return await FetchOne(prop._id) as unknown as IHistoryDoc
    }
  },

  Mutation: {
    async postHistory(_: any, prop: GQLPostHistory): Promise<IHistoryDoc> {
      return await Create(prop.input) as unknown as IHistoryDoc
    },
    async editHistory(_: any, prop: GQLEditHistory): Promise<IHistoryDoc> {
      return await Edit(prop.input) as unknown as IHistoryDoc
    },
    async removeHistory(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IHistoryDoc
    },
  }
}

export default HistoryResolver