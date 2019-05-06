const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
  //nickname: String,
  //firstName: String,
  //lastName: String,
  //createdEvents: [],

});

mongoose.model("users", userSchema);