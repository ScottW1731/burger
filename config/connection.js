var dotenv = require("dotenv");
dotenv.config();
var mysql = require("mysql");

var {DB_USER, DB_PASS, DB_NAME} = process.env;
var config = { 
    host: "localhost",
    port: 3306,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
}
var connection;
var host;

if(process.env.JAWSDB_URL){
var connection = mysql.createConnection(process.env.JAWSDB_URL);
host = "JAWSDB";
}else{
  connection = mysql.createConnection(config);
  host = "localhost";
}



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected with " + host);
});

module.exports = connection;
