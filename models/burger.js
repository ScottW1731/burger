var orm = require("../config/orm.js");

// file calling a file calling a file calling a file calling in server.js
// contain all methods to modify orm for burgerDB


var burger = {
    selectAll: function(cb){
        orm.selectAll('burger', function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne('burger', cols, vals, function(res) {
            cb(res);
          });
    },
    updateOne: function(objColsVals, id, cb){
        orm.updateOne("burger", objColsVals, id, function(res){
            
            cb(res)
        });
    }
}

module.exports = burger;

// conection => orm (establish your queries ex. "SELECT * FROM" -RAW)
// orm => model.js (fill out the queries)