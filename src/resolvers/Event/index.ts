import { EventModel } from "../../models/Event/event.model"
import { GQLEditEvent, GQLPostEvent, IEventDoc, IUserID } from "../../models/Event/event.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(EventModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const EventResolver = {
  Query: {
    async fetchEvents(_: any, prop: any): Promise<IEventDoc[]> {
      return await Fetch() as unknown as IEventDoc[]
    },
    async fetchEventByID(_: any, prop: IUserID): Promise<IEventDoc> {
      return await FetchOne(prop._id) as unknown as IEventDoc
    }
  },

  Mutation: {
    async postEvent(_: any, prop: GQLPostEvent): Promise<IEventDoc> {
      return await Create(prop.input) as unknown as IEventDoc
    },
    async editEvent(_: any, prop: GQLEditEvent): Promise<IEventDoc> {
      return await Edit(prop.input) as unknown as IEventDoc
    },
    async removeEvent(_: any, prop: any) {
      return await Remove(prop._id) as unknown as IEventDoc
    },
  }
}

export default EventResolver