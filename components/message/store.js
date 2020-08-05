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
  const myMessage = new Model(message);
  myMessage.save();
}

async function listMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = {
      user: filterUser,
    };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateTextMessages(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: listMessages,
  // get
  updateText: updateTextMessages,
  // delete
};
