var connection = require("./connection.js");

// ------------------------------ HELPER FUNCTIONS --------------------------------- //
// 1. Helper functions for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  }
  
  //2. Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
    console.log('what is this obj: ' + ob[0]);
  
    for (var key in ob) {
      var value = ob[key];
  
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + '=' + value);
      }
    }
    return arr.toString();
  }
  

// getting all burgers
// object with methods, all the different thing we will do with our data
// collects all data from database
// create new data in DB
// update data existing in DB
var orm = {
    selectAll: function(tableInput, cb){
      // if you will use it alot it is best to make it easy to do so in a variable
      var selectString = "SELECT * FROM " + tableInput + ";";
        connection.query(selectString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    update: function(tableInput, condition, cb){
      var updateString = "UPDATE " + tableInput + "SET  = true WHERE id="+condition+";";
        connection.query(updateString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
    
};

module.exports = orm;