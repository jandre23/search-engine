var express = require('express');
var router = express.Router();
var app= express();







router.route('/searchResults')
	.post(function(req,res,next){
		res.send( { ok: true, data: req.body.word});
		

});

module.exports=router;