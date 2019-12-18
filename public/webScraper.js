const cheerio = require('cheerio');
const axios = require('axios');

var mysql=require('mysql');


const startUrl ='https://en.wikipedia.org/wiki/Leo_Szilard';
let insert= "insert into `page` (url,title,description,lastModified,lastIndexed,timeToIndex) VAlUES";
let endquote="')";
let startquote= "('";
let query =insert+startquote+startUrl+endquote;
    
     
db.query(query,(err,result)=>{
if(err){
return;

}
	//console.log(result);
	//res.send( { ok: true, data: result});
});


axios.get(startUrl).then((response)=>{
	const $ = cheerio.load(response.data)

	const urlElems = $('p')


	for (let i = 0; i < urlElems.length; i++) {


		const urlSpan=$(urlElems[i]).find('a')[0]

console.log($(urlSpan).attr('href'))
		if(urlSpan){

			const urlText= $(urlSpan).text()

			console.log(urlText)
		}
	}

	

});

function validTags(urlText){



}

function parseAndStore( urlText){
	var parsed= urlText.split(" ");





}