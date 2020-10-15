const mysql = require("mysql");
let connection;
(connection = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "keroKero445",
      database: "burgers_db",
    })),
  connection.connect((a) => {
    if (a) throw a;
    console.log("Connection establish on port: " + connection.threadId);
  }),
  (module.exports = connection);
