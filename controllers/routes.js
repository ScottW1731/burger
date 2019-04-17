//
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")


//route to display our index.handlebars (homepage)
router.get("/", function(req, res){
res.status(200);
});


// route to create a burger (post request)
router.post("/create", function(req, res){
  res.status(200);
})

// route to update the burger throught its id]
router.put("/:id", function(req, res){
  res.status(200);
})


// export your routes: 
module.exports = router;