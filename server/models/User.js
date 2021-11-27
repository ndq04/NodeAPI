const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    coverImage: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 60,
    },
    city: {
      type: String,
      max: 60,
    },
    from: {
      type: String,
      max: 60,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  {timestamps: true}
)

module.exports = mongoose.model('users', UserSchema)
