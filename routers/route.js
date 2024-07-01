const express = require("express");
const enPoint = express.Router();
const controller = require("../controller/sensor");

enPoint.get("/output", controller.showData);

module.exports = enPoint;
