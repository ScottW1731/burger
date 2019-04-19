var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgerDB"
});

/*
if (process.env.MYSQL_URL) {
  var connection = mysql.createConnection(process.env.MYSQL_URL);
  host = 'MYSQL';
} else {
  connection = mysql.createConnection(config);
  host = 'localhost';
}
*/
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
