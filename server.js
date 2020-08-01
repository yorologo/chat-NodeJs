const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

let port = 3000;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// app.use("/", (request, response) => {
//   response.send("Hola");
// });

// GET method route
router.get("/message", function (request, response) {
  console.log(request.headers);
  response.header({ "custom-header": "Nuestro valor personalizado" });
  response.send("Lista de mensajes");
});

// POST method route
router.post("/message", function (request, response) {
  console.log(request.query);
  console.log(request.body);
  // Respuesta Vacía
  response.status(201).send();
  // // Respuesta Plana
  // response.status(201).send("Creado correctamente");
  // // Respuesta con Datos
  // response.status(201).send({ error: "", body: "Creado correctamente" });
  // // Respuesta Estructurada
  // response.status(201).send([{ error: "", body: "Creado correctamente" }]);
});

// DELETE method route
router.delete("/message", function (request, response) {
  response.send("Mensaje borrado correctamente");
});

app.listen(port);
console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
