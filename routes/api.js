var express = require('express');
var router = express.Router();
var app= express();





router.route('/')
	.get(function(req,res,next){
console.log("/api");


  res.render('searchResults',{ searchType: 'Search Engine'});
});

router.route('/searchResults')
	.post(function(req,res,next){
console.log("api/searchResults");

 res.render('searchResults',{ searchType: 'Search Engine'});
//res.send({ok: true,content:{ searchType: 'Search Engine'},});
//res.redirect('/')
  //res.redirect('/',{ searchType: 'Search Engine'});
});

module.exports=router;