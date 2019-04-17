var connection = require("./connection");

// getting all burgers
// object with methods, all the different thing we will do with our data
// collects all data from database
// create new data in DB
// update data existing in DB
var orm = {
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
};

module.exports = orm;