let connection = require("./connection.js");

// Create question marks for each user input variable
function qMarks(num) {
  let arr = [];
  for (i in num) {
    arr.push("?");
  }
  return arr.toString();
}

let orm = {

  // Select all rows from a table
  selectAll: function(table, cb) {
    connection.query("SELECT * FROM ??;", [table], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },

  // Insert a new row into a table
  insertOne: function(table, cols, info, cb) {
    let qCount = qMarks(cols.length);
    connection.query("INSERT INTO ?? (" + qCount + ") VALUES (" + qCount + ");", [table, cols.toString(), info.toString()], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },

  // Update a value in the database using a conditional identifier
  updateOne: function(table, col1, val, col2, id, cb) {
    connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?;", [table, col1, val, col2, parseInt(id)], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
