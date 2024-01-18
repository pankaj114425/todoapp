const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        maxlength: 20,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
      },
      password: {
        type: String,
        required: true,
        minlength: 4
      },
  list:[{
    type:mongoose.Types.ObjectId,
    ref:"tasks",
  }],
 
 
}, { timestamps: true });
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;