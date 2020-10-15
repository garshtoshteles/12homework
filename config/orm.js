const connection = require("./connection"),
  orm = {
    selectAll: (a, b) => {
      connection.query("SELECT * FROM ??", [a], (a, c) => {
        if (a) throw a;
        b(c);
      });
    },
    insertOne: (a, b, c, d) => {
      connection.query("INSERT INTO ?? (??) VALUES (?)", [a, b, c], (a, b) => {
        if (a) throw a;
        d(b);
      });
    },
    updateOne: (a, b, c, d, e, f) => {
      connection.query(
        "UPDATE ?? SET ?? = ? WHERE ?? = ?",
        [a, b, c, d, e],
        (a, b) => {
          if (a) throw a;
          console.log("ORM updateOne ", b), f(b);
        }
      );
    },
  };
module.exports = orm;
