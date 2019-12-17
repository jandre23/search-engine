var express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){
//console.log("adminpage");


res.render('adminEngine',{adminType:'Admin Engine',userType:'Search Engine'});
  
});

/*
router.route('/page'+resultNum)
    .get(function)

*/
module.exports=router;
