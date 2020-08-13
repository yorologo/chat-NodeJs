const express = require("express");
const app = express();
const server = require("http").Server(app);

const cors = require("cors");
const bodyParser = require("body-parser");
const socket = require("./socket");
const db = require("./db");
const router = require("./network/routes");

db(
  "mongodb+srv://db_newUser:6MxEPqi3aQQnjjCM@cluster0.yebum.mongodb.net/CursoNodeJS?retryWrites=true&w=majority"
);

let port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use("/app", express.static("public"));

server.listen(port, function () {
  console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
});
