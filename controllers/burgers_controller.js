// Require Express and set up the router to control routes
let express = require("express");
let router = express.Router();

// Import models to interact with ORM
let Burger = require("../models/burger.js");

// Router paths here https://expressjs.com/en/guide/routing.html

router.get("/", (req, res) => {
  Burger.all(function(data) {
    let burgers = {
      hitlist: [],
      devoured: []
    };
    for (i in data) {
      if (data[i].devoured === 1) {
        burgers.devoured.push(data[i]);
      } else {
        burgers.hitlist.push(data[i]);
      }
    }
    res.render("index", burgers);
  });
});

router.post("/", (req, res) => {
  Burger.add(req.body.burgerName, req.body.restaurant, function() {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
  Burger.update(req.body.id, function() {
    res.redirect("/");
  });
});

module.exports = router;
