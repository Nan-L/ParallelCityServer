const mongoose = require('mongoose');
const { Schema } = mongoose;
const VoterSchema = require("./Voter");

const eventSchema = new Schema({
  title: String,
  author: String,
  desc: String,
  startDate: {type: Date, default: Date.now},
  countdown: {type: Number, default: 10},
  target: {type: Number, default: 10},
  votes: {type: Number, default: 0},
  voters: [VoterSchema],
  status: String,
  //img
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model("events", eventSchema);