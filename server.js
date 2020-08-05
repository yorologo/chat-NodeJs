const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./network/routes");

db(
  "mongodb+srv://db_newUser:6MxEPqi3aQQnjjCM@cluster0.yebum.mongodb.net/CursoNodeJS?retryWrites=true&w=majority"
);

let port = 3000;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

app.use("/app", express.static("public"));

app.listen(port);
console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
