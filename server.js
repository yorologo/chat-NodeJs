const express = require("express");

let app = express();
let port = 3000;

// app.use("/", (request, response) => {
//   response.send("Hola");
// });

// GET method route
app.get("/message", function (req, res) {
  res.send("Lista de mensajes");
});

// POST method route
app.post("/message", function (req, res) {
  res.send("Mensaje añadido correctamente");
});

// DELETE method route
app.delete("/message", function (req, res) {
  res.send("Mensaje borrado correctamente");
});

app.listen(port);
console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
