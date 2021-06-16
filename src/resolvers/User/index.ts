import { UserModel } from "../../models/User/user.model"
import { GQLEditUser, GQLPostUser, IUserDoc, IUserID } from "../../models/User/user.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(UserModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const UserResolver = {
  Query: {
    async fetchUsers(_: any, prop: any): Promise<IUserDoc[]> {
      return await Fetch() as unknown as IUserDoc[]
    },
    async fetchUserByID(_: any, prop: IUserID): Promise<IUserDoc> {
      return await FetchOne(prop._id) as unknown as IUserDoc
    }
  },

  Mutation: {
    async signUp(_: any, prop: GQLPostUser): Promise<IUserDoc> {
      return await Create(prop.input) as unknown as IUserDoc
    },
    async editUser(_: any, prop: GQLEditUser): Promise<IUserDoc> {
      return await Edit(prop.input) as unknown as IUserDoc
    },
    async removeUser(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IUserDoc
    },
    async login(_: any, prop: GQLPostUser): Promise<IUserDoc> {
      const foundUser = await FetchOne(prop.input.username, "username") as unknown as IUserDoc
      if (foundUser.error) return foundUser
      if (String(foundUser.password) === String(prop.input.password)) {
        return foundUser
      } else {
        return {
          error: {
            value: 400, message: "Invalid username or password"
          }
        } as any
      }
    }
  }
}

export default UserResolver