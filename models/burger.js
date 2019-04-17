var orm = require("../config/orm");

// file calling a file calling a file calling a file calling in server.js
// contain all metheds to modify orm for burgerDB
var burger = {
    all: function(tableInput, cb){
        connection.query("SELECT * FROM" + tableInput + ";", function(err, result){
            if(err) throw err;
            cb(result)
        })
    },
    update: function(tableInput, condition, cb){
        connection.query("UPDATE " + tableInput +"SET  = true WHERE id="+condition+";", function(err, result){
            if(err) throw err;
            cb(result)
        })
    }
}

module.exports = burger