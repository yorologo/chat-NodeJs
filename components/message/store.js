const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
db.connect(
  "mongodb+srv://db_newUser:6MxEPqi3aQQnjjCM@cluster0.yebum.mongodb.net/CursoNodeJS?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log("[database] Conexion realizada correctamente");

function addMessage(message) {
  console.log(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function listMessages() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: listMessages,
  // get
  // update
  // delete
};
