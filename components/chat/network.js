const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/:userId", function (req, res) {
  controller
    .listChats(req.params.userId)
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((error) => {
      response(req, res, "Error interno", 500, error);
    });
});

router.post("/", function (req, res) {
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((error) => {
      response(req, res, "Error interno", 500, error);
    });
});

module.exports = router;
