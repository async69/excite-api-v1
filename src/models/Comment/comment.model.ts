import { model } from "mongoose"
import CommentSchema from "./comment.schema"

export const CommentModel = model("comments", CommentSchema)