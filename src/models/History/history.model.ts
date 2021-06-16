import { model } from "mongoose"
import HistorySchema from "./history.schema"

export const HistoryModel = model("history", HistorySchema)