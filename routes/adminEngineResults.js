var express = require('express');
var router = express.Router();
var app= express();



router.route('/:word')
	.get(function(req,res){
		let parm= req.params.word;
		let query = "select * from `word` where word_name ='"+parm+"'";
    	//let value=getPageResults(word);
    	db.query(query,(err,result)=>{
				if(err){console.log('sql error ');
					return;
				}
			res.render('adminEngineResults',{page: result});
		});
//res.render('searchResults',{page:value});
	});
module.exports=router;