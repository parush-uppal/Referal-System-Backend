const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    referalLink: {
      type: String,
      trim: true,
      unique: true,
    },
    userRefered: {
      type: Number,
      required: true,
      default: 0,
    },
    number: {
      type: Number,
      required: true,
      default: 0,
    },
  });



module.exports = mongoose.model('User', userSchema)

