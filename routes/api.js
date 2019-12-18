
var express = require('express');
var router = express.Router();
var app= express();







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

	router.route('/adminData')
	.post(function(req,res,next){

		let value= req.body.word;
		console.log(value);

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


module.exports=router;