import { Schema } from "mongoose"

const ExciteUser = new Schema({
  firstName: {
    type: String, unique: false
  },
  middleName: {
    type: String, unique: false, default: ""
  },
  lastName: {
    type: String, unique: false
  },
  email: {
    type: String, unique: false
  },
  profession: {
    type: String, unique: false
  },
  rating: {
    type: Number, unique: false, default: 0
  },
  profilePicture: {
    type: String, unique: false, default: ""
  },
  histories: [{
    type: Object, unique: false, default: []
  }],
  reviews: [{
    type: Object, unique: false, default: []
  }],
  pictures: [{
    type: String, unique: false, default: []
  }],
  phoneNumber: {
    type: String, unique: false
  },
  description: {
    type: String, unique: false, default: ""
  },
  address: {
    type: Object, unique: false, default: {}
  },
  minPriceForEvent: {
    type: Number, unique: false, default: 0
  },
  isOpenToWork: {
    type: Boolean, unique: false, default: false
  },
  isVerified: {
    type: Boolean, unique: false, default: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default ExciteUser