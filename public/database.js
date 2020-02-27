const mysql  = require('mysql');


const db = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: 'nylegend23',
  database:'test'

  });

db.connect((err)=> {
  if (err){console.log("connection error");
    throw err;}
  
  console.log( "CONNECTED TO DATABASE");
});




function get_links(url,callback){

}
function parseBody(url, body,callback){

}
function insert_word(page_id, word, frequency ,callback){

  checkWord(word, function(err, word){ 
    if(word.count[0].ncount>0){
      getWordID(word,function(err,wordId){
        let query = "INSERT INTO page_word(page_id, word_id, freq)VALUES("+page_id+","+ wordID.word_id+","+ frequency+")";
      db.query(query,(err,result)=>{
        if(err){
          callback(err,null);
          return;

          }
        callback(null,{success:true});
        return;
      });



      });
      



    }
    else{
      let query = "INSERT INTO word (wordName) VALUES ('" +word+ "')";
      db.query(query,(err,result)=>{
        if(err){
          callback(err,null);
          return;

          }
        callback(null,{success:true});
        return;
      });
    }
  });
}


function insertUrl( url,lastModified, lastUpdated, callback ){

let query= " insert into `page` ( url, lastModified, lastIndexed) VALUES ( '" +url+  "','"+lastModified+ "','"+ lastUpdated+"');"; 
db.query( query, ( err,result)=> {
  if( err) {
    callback( null,err);
    return;
  }
  callback( result,null);
  return;
});



} 

function checkWord(word,callback){
  let query = "select count(*) as ncount from `word` WHERE wordName like '"+word+"'";
  
  db.query(query,(err,result)=>{
    if(err){
      callback(err,null);
      return;

    }
   console.log(result.rows);
       //callback(null,{count:result});
    return;
  });
  

}


function checkPage(url,callback){
  let query = "select count(*) as ncount from `page` WHERE `url` like '"+url+"'";
  
  db.query(query,(err,result)=>{
    if(err){
      callback(err,null);
      return;

    }
    
    callback(null,{count:result});
    return;
  });

}

//good
function getWordID(word,callback){
  
  let query = "select `wordid` from `word` WHERE wordName like '"+word+"'";
  
  db.query(query,(err,result)=>{
		if(err){
      callback(err,null);
			return;

		}
		
    callback(null,{wordId:result[0].wordid});
		return;
	
});
  
}

//good
function getPageID(url,callback){
  let query = "select `pageId` from `page` WHERE `url` like '"+url+"'";
  
  db.query(query,(err,result)=>{
    if(err){
      callback(err,null);
      return;

    }
    
    callback(null,{pageId:result[0].pageId})
    return;
  
});
 
}
function getLinks(url,callback){

}

//let str= " empty,'=;' string -.array";

//let splitstr =str.split(/\b(?!\s)/);
//let splitstr=str.match(/\b(\w+)\b/g)
//console.log(splitstr);


/*
checkWord('hello', function(err, word){ 
  if(err){console.log(err);return;}
  console.log(word.count[0].ncount)});
*/

/*
checkPage('https://en.wikipedia.org/wiki/Leo_Szilard', function(err, page){ 
  if(err){console.log(err);return;}
   console.log(page.count[0].ncount)
});
*/


//insertWord('not', function(err, word){ console.log(word.count[0].ncount)});

//checkPage('hello', function(err, word){ console.log(word.count[0].ncount)}); 

//get_links($root); 
//foreach($Queue as $q){
  //scrapper($q);
//}

function close(){ db.end(function(err){ if ( err)throw err;}); 
      
}
module.exports = db;
module.exports.close= close;
module.exports.getWordID=getWordID;
module.exports.checkWord= checkWord;
module.exports.insertUrl= insertUrl;

