var express = require('express');
var router = express.Router();
var app= express();



router.route('/searchResults')
.get(function(req,res){
console.log("searchResultspage");


res.render('searchResults');
  
});

/*
router.route('/page'+resultNum)
    .get(function)

*/
module.exports=router;
