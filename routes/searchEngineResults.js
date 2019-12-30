var express = require('express');
var router = express.Router();
var app= express();


router.route('/:word')
	.get(function(req,res){
		let parm= req.params.word;



		let query = "select * from `word` where word_name ='"+parm+"'";
    
    
			db.query(query,(err,result)=>{
				if(err){console.log('sql error ');
					return;
				}

				let word_id= result[0].word_id;
				//console.log(result[0].word_id);
				let query = "SELECT * FROM page, word, page_word WHERE page.pageId = page_word.pageId AND '" +word_id+"'  = page_word.wordId";
				db.query(query,(err,result)=>{


					if(err)return;
					console.log(result);

					res.render('searchEngineResults',{word: result});
				});

				
			});
		});

module.exports=router;