const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  desc: String,
  startDate: {type: Date, default: Date.now},
  //countdown: {type: Number, default: 10},
  //target: {type: Number, default: 10},
  //status: String,
  //img
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model("events", eventSchema);