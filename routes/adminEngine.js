 var express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){

	let query = "select * from `word` ";
    
    
db.query(query,(err,result)=>{
if(err){
	return;
}
 console.log("accessd index page");
res.render('searchResults',{adminType:'Admin Engine',userType:'Search Engine', page: result});
});





//res.render('searchResults',{adminType:'Admin Engine',userType:'Search Engine'});
  
});


router.route('/:word')
	.get(function(req,res){
		let parm= req.params.word;

		let query = "select * from `word` where word_name ='"+parm+"'";
    
    
			db.query(query,(err,result)=>{
				if(err){console.log('sql error ');
					return;
				}
				
 		//console.log("accessd index page");
		res.render('searchResults',{adminType:'Admin Engine',userType:'Search Engine', page: result,data: req.params.word});
});





//res.render('searchResults',{adminType:'Admin Engine',userType:'Search Engine'});
  
});



/*
router.route('/page'+resultNum)
    .get(function)

*/
module.exports=router;