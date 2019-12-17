var express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){
     let query = "show tables";
    
     console.log("accessd index page");
db.query(query,(err,result)=>{
if(err){res.redirect('/');}
console.log(result);


});


res.render('index');
  
});

router.route('/searchResults')
	.get(function(req,res){
		console.log("searchResultspage");


		res.render('searchResults');
  
});

	
	router.route('/admin')
	.get(function(req,res){
		console.log("admin");
		var type= admin ;

		res.render('admin',{searchType: 'admin'});
  
});



/*
router.route('/page'+resultNum)
    .get(function)

*/
module.exports=router;
