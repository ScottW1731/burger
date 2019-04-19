//
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")


//route to display our index.handlebars (homepage)
router.get("/", function(req, res){
// res.json({"message": "hello"});
burger.selectAll(function(data){
  var hbsObject = {
    burger: data
  };
  res.render('index', hbsObject)
})
});


// route to create a burger (post request)
router.post("/create", function(req, res){
  console.log(req.body)
    burger.insertOne(
      ["name","calories","price","eaten"],
    [req.body.name, req.body.calories, req.body.price, req.body.eaten], function(result){
      res.json({id: result.insertId})
    }
    )
    
})

// route to update the burger throught its id]
router.put("/:id", function(req, res){
  var id = "id =" + req.params.id;
  burger.updateOne({eaten: req.body.eaten},id,function(result){
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    
  })
})






// export your routes: 
module.exports = router;