// Require Express and set up the router to control routes
let express = require("express");
let router = express.Router();

// Import models to interact with ORM
let Burger = require("../models/burger.js");

// Router paths here https://expressjs.com/en/guide/routing.html

module.exports = router;
