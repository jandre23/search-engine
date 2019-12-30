var express = require('express');
var router = express.Router();
var app= express();





router.route('/')
	.get(function(req,res){
		let parm= req.params.word;

		let query = "select * from `search`;";
    
   
			db.query(query,(err,result)=>{
				if(err){console.log('sql error ');
					return;
				}
 console.log(results);
				res.render('adminStats',{search: result});
			});
		
  
});

module.exports=router;
