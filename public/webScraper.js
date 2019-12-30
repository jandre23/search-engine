const cheerio = require('cheerio');
const axios = require('axios');




const startUrl ='https://www.qc.cuny.edu/Pages/home.aspx';
let insert= "insert into `page` (url,title,description,lastModified,lastIndexed,timeToIndex) VAlUES";
let endquote="')";
let startquote= "('";
let query =insert+startquote+startUrl+endquote;
    
     



axios.get(startUrl).then((response)=>{
	const $ = cheerio.load(response.data)

	const urlElems = $('p')


	for (let i = 0; i < urlElems.length; i++) {


		const urlSpan=$(urlElems[i]).find('a')[0]

//console.log($(urlSpan).attr('href'))
		if(urlSpan){

			const urlText= $(urlSpan).text()

			//console.log(urlText)
		}
	}

	

});

function validTags(urlText){



}

function parseAndStore( urlText){
	var parsed= urlText.split(" ");





}




