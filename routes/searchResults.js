var express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){
console.log("searchResultspage");


res.render('searchResults',{searchType:'Admin Engine'});
  
});

/*
router.route('/page'+resultNum)
    .get(function)

*/
module.exports=router;
