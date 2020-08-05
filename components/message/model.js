const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: { type: String, required: true },
  time: { type: Date, required: true },
  message: { type: String, required: true },
});

const model = mongoose.model("Message", mySchema);
module.exports = model;
