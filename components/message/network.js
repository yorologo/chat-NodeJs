const express = require("express");
const router = express.Router();
const response = require("../../network/response");

// GET method route
router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({ "custom-header": "Nuestro valor personalizado" });
  response.success(req, res, "Lista de mensajes");
});

// POST method route
router.post("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "Error inesperado",
      500,
      "Es solo una simulacion de los errores"
    );
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

module.exports = router;
