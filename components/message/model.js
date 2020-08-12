const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  chat: { type: Schema.ObjectId, ref: "Chat" },
  user: { type: Schema.ObjectId, ref: "User" },
  time: { type: Date, required: true },
  message: { type: String, required: true },
});

const model = mongoose.model("Message", mySchema);
module.exports = model;