var orm = require("../config/orm");

// file calling a file calling a file calling a file calling in server.js
// contain all methods to modify orm for burgerDB


var burger = {
    selectAll: function(cb){
        orm.selectAll('burger', function(res){
            cb(res);
        })
    },
    insertOne: function(columns, values, cb){
        
    }
    update: function(tableInput, condition, cb){
        connection.query("UPDATE " + tableInput +"SET  = true WHERE id="+condition+";", function(err, result){
            if(err) throw err;
            cb(result)
        })
    }

}

module.exports = burger;

// conection => orm (establish your queries ex. "SELECT * FROM" -RAW)
// orm => model.js (fill out the queries)