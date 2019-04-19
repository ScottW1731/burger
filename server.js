var express = require("express")
// var methodOverride = require("method-override")
var exphbs = require("express-handlebars")
var routes = require("./controllers/routes.js")


var PORT = process.env.PORT || 3306;
var app = express();
app.use(express.static("public"));

//Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handelbars as view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Pass routes inside of express
app.use(routes);


app.listen(PORT, function(){
    console.log('Listening on port: ', PORT)
})