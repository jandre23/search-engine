
var database = require('../public/database.js');

var express = require('express');
var router = express.Router();
var app= express();






/*
database.checkWord('hello', function(err, word){ 
  if(err){console.log(err);return;}
  console.log(word.count[0].ncount)});
*/

router.route('/searchResults')
	.post(function(req,res,next){

		let value= req.body.word;
		//console.log(value);

let query = "insert into `word` (word_name) VAlUES('"+value+"')";
    
     
db.query(query,(err,result)=>{
if(err){
return;

}
	//console.log(result);
	//res.send( { ok: true, data: result});
});

		res.send( { ok: true, data: req.body.word});
		

});

	router.route('/adminResults')
	.post(function(req,res,next){

		let value= req.body.word;
		let query = "insert into `word` (word_name) VAlUES('"+value+"')";
		//console.log(value);
    	db.query(query,(err,result)=>{
			if(err){
				return;

		}
		console.log(result);
		let query ="select * from `word` where word_name ='"+value+"'";
	

	//console.log(result);
	//res.send( { ok: true, data: result});
});

		
		

});

	


module.exports=router;