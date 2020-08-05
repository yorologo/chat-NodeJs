const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.post("/", function (req, res) {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, err);
    });
});

router.get("/", function (req, res) {
  const filterUser = req.query.user || null;
  controller
    .getUser(filterUser)
    .then((usersList) => {
      response.success(req, res, usersList);
    })
    .catch((error) => {
      response.error(req, res, "Error inesperado", 500, error);
    });
});

module.exports = router;
