var express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){
 


res.render('searchEngineMain',{adminType:'Admin Engine',userType:'Search Engine'});
  
});





module.exports=router;
