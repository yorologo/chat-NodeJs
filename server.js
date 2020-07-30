const express = require("express");

let port = 3000;
let app = express();

app.use("/", (request, response) => {
  response.send("Hola");
});

app.listen(port);
console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
