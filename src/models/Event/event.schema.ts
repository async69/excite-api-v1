import { Schema } from "mongoose"

const Event = new Schema({
  exciteUserID: {
    type: String, unique: false
  },
  priceOffered: {
    type: Number, unique: false
  },
  eventDescription: {
    type: String, unique: false
  },
  date: {
    type: String, unique: false
  },
  numberOfPeopleAttending: {
    type: Number, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default Event