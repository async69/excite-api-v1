import { Schema } from "mongoose"

const Review = new Schema({
  userID: {
    type: String, unique: false
  },
  content: {
    type: String, unique: false
  },
  exciteID: {
    type: String, unique: false, default: ""
  },
  comments: [{
    type: String, unique: false, default: []
  }],
  rating: {
    type: Number, unique: false, default: 0
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default Review