const db = require('./public/database');
const http = require ('http');


var callback=function(err, results){
	if( err)console.log(err);
	console.log( results.wordId);


};

var options = {method: 'GET', host: 'wikipedia.org', port: 80, path: '/wiki/Leo_szilard'};

var req = http.request(options, function(res) {
    console.log(JSON.stringify(res.headers));
    //console.log(JSON.stringify( res.))

  }
);




/*
var req= http.request('http://en.wikipedia.org/wiki/Leo_Szilard', function(res) {

console.log( JSON.stringify( res.headers));

}
);

*/

req.end();



//db.getWordID('word',callback);// good 
//db.checkWord('word', callback); //good 


db.close();

