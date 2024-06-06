const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required."],
    minlength: [3, "User name must be 3 character long."]
  },
  email: {
    type: String,
    required: [true, "Email is required."]
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [8, "Password must be 8 character long."]
  },
  imgUrl: {
    type: String
  },
  role: {
    type: String,
    default: 'user',
    required: [true, "Role is required."],
  },
  belt: {
    type: Boolean,
    default: false
  },
  degree: {
    type: Boolean,
    default: false
  }
}, {timestamps: true})


const User = mongoose.model('User' , UserSchema);

module.exports = User;