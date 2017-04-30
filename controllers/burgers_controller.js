// Require Express and set up the router to control routes
let express = require("express");
let router = express.Router();

// Import models to interact with ORM
let Burger = require("../models/burger.js");

// Router paths here https://expressjs.com/en/guide/routing.html

router.get("/", (req, res) => {
  Burger.all(function(data) {
    let info = {
      burgers: data
    };
    res.render("index", info);
  });
});

router.post("/", (req, res) => {
  Burger.add(req.body.burgerName, req.body.restaurant, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  Burger.update(req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;
