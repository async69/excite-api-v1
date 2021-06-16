import { ExciteUserModel } from "../../models/ExciteUser/excite_user.model"
import { GQLEditExciteUser, GQLPostExciteUser, IExciteUserDoc, IUserID } from "../../models/ExciteUser/excite_user.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(ExciteUserModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const ExciteUserResolver = {
  Query: {
    async fetchExciteUsers(_: any, prop: any): Promise<IExciteUserDoc[]> {
      return await Fetch() as unknown as IExciteUserDoc[]
    },
    async fetchExciteUserByID(_: any, prop: IUserID): Promise<IExciteUserDoc> {
      return await FetchOne(prop._id) as unknown as IExciteUserDoc
    },
    async fetchUnVerifiedUsers(_: any, prop: IUserID) {
      const users = await Fetch() as unknown as IExciteUserDoc[]
      return users.filter(user => !user.isVerified)
    },
    async fetchVerifiedUsers(_: any, prop: IUserID) {
      const users = await Fetch() as unknown as IExciteUserDoc[]
      return users.filter(user => user.isVerified)
    },
  },

  Mutation: {
    async postExciteUser(_: any, prop: GQLPostExciteUser): Promise<IExciteUserDoc> {
      return await Create(prop.input) as unknown as IExciteUserDoc
    },
    async editExciteUser(_: any, prop: GQLEditExciteUser): Promise<IExciteUserDoc> {
      return await Edit(prop.input) as unknown as IExciteUserDoc
    },
    async removeExciteUser(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IExciteUserDoc
    },
    async verifyExciteUser(_: any, prop: IUserID): Promise<IExciteUserDoc> {
      return await Edit({
        _id: prop._id,
        isVerified: true
      }) as unknown as IExciteUserDoc
    }
  }
}

export default ExciteUserResolver