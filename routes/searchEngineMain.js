express = require('express');
var router = express.Router();
var app= express();



router.route('/')
.get(function(req,res){

res.render('searchEngineMain');

  
});



module.exports=router;

