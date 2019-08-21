const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  desc: String,
  startDate: {type: Date, default: Date.now},
  //countdown: {type: Number, default: 10},
  //target: {type: Number, default: 10},
  upvote: {type: Number, default: 0},
  //status: String,
  img: {data: Buffer, contentType: String},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model("events", eventSchema);