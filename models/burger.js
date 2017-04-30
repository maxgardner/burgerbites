let orm = require("../config/orm.js");

let Burger = {

  // Select all burgers
  all: function(cb) {
    orm.selectAll("burger", cb);
  },

  // Add a burger
  add: function(burgerName, restaurant, cb) {
    // Specify the columns to insert the burger info into
    cols = ["burger_name", "restaurants"];
    // Convert the burger info into an array
    burgerInfo = [burgerName, restaurant];
    orm.insertOne("burger", cols, burgerInfo, cb);
  },

  update: function(id, cb) {
    orm.updateOne("burger", id, cb);
  }

}

module.exports = Burger;
