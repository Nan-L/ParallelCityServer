const mongoose = require('mongoose');
const { Schema } = mongoose;

const voterSchema = new Schema({
  nickname: String, //user identification info
  voted: {type: Boolean, default: false}
});

module.exports = voterSchema;