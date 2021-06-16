import { model } from "mongoose"
import ReviewSchema from "./review.schema"

export const ReviewModel = model("reviews", ReviewSchema)