const express = require("express");
const path = require("path");
const fs = require("fs");
const weatherController = require('../controller/weatherController')

const router = express.Router();

router.route("/getbycityname").get(weatherController.GetByCityName);

router.route("/getbyzipcode").get(weatherController.GetByZipCode);

router.route("/getbycitiesname").get(weatherController.GetByCitiesName);


module.exports = router;
