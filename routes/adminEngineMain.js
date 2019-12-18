express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){

res.render('adminEngineMain');

  
});



module.exports=router;

