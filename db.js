const db = require("mongoose");

db.Promise = global.Promise;

// "mongodb+srv://db_newUser:6MxEPqi3aQQnjjCM@cluster0.yebum.mongodb.net/CursoNodeJS?retryWrites=true&w=majority"
async function connect(url) {
  await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("[database] Conexion realizada correctamente");
}

module.exports = connect;
