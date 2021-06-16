import { model } from "mongoose"
import EventSchema from "./event.schema"

export const EventModel = model("events", EventSchema)