var express = require('express');
var router = express.Router();
const db= require( '../public/database.js');
var app= express();

router.route('/:url')
	.get(function(req,res){
		let parm= req.params.url;
		let query = "select * from `page` where pageId ='"+parm+"'";
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