import { Schema } from "mongoose"

const Comment = new Schema({
  reviewID: {
    type: String, unique: false
  },
  content: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default Comment