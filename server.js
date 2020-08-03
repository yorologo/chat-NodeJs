const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./network/response");

let port = 3000;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

// GET method route
router.get("/message", function (req, res) {
  console.log(req.headers);
  res.header({ "custom-header": "Nuestro valor personalizado" });
  response.success(req, res, "Lista de mensajes");
});

// POST method route
router.post("/message", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  if (req.query.error == "ok") {
    response.error(req, res, "Error inesperado", 500, "Es solo una simulacion de los errores");
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

// DELETE method route
router.delete("/message", function (req, res) {
  response.success(req, res, "Mensaje borrado correctamente");
});

app.use("/app", express.static("public"));

app.listen(port);
console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
