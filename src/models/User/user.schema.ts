import { Schema } from "mongoose"

const UserSchema = new Schema({
  username: {
    type: String, unique: false
  },
  password: {
    type: String, unique: false
  },
  exciteUserID: {
    type: String, unique: false, default: ""
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default UserSchema