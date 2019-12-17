var express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){
     let query = "show tables";
    
     console.log("accessd index page");
db.query(query,(err,result)=>{
if(err){res.redirect('/');}
//console.log(result);


});


res.render('index',{adminType:'Admin Engine',userType:'Search Engine'});
  
});





module.exports=router;
