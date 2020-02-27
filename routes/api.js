
const db= require( '../public/database.js');
//const webScraper = require('.. public/webScraper');

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
		

let query = "insert into `word` (wordName) VAlUES('"+value+"')";
    
     
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
		let query = "insert into `word` (wordName) VAlUES('"+value+"')";
		//console.log(value);
    	db.query(query,(err,result)=>{
			if(err){
				return;

		}
		console.log(result);
		let query ="select * from `word` where wordName ='"+value+"'";
	

	//console.log(result);
	//res.send( { ok: true, data: result});
});

		
		

});

	


module.exports=router;