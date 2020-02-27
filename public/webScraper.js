const cheerio = require('cheerio');
const axios = require('axios');
const db= require('./database');




const startUrl ='https://www.atomicheritage.org/profile/leo-szilard';
//let insert= "(insert into `page` (url,title,description,lastModified,lastIndexed,timeToIndex) VAlUES";

var urls= [startUrl];


	axios.get(startUrl).then((response)=>{

		headerInfo( urls[0], function(data){
			db.insertUrl( startUrl, data.d,data.LU, function( results,err){
				if( results== null){console.log( err);}
			});

		});
		
		const $ = cheerio.load(response.data)
		const urlElems = $('p')
	
		for (let i = 0; i < urlElems.length; i++) {
			const urlSpan=$(urlElems[i]).find('a');
			//const urlText=$(urlElems[i].text());

			//console.log( $(urlElems[i]).text());
			for ( let i= 0; i< urlSpan.length; i++){
				if(urlSpan){

					const urlHref= $(urlSpan[i]).attr('href');
					
						if(urlHref!= undefined){let   re = /\s*[,|\s|\;|\"]\s*/

							var parsed= urlHref.split(re);

							for( let i=0; i< parsed.length; i++){

								urls.push( parsed[i]);
								let q= " insert into word(wordName) values('"+ parsed[i]+"');";
								/*
								db.query( q, (err,result)=>{

								if( err){console.log(err);
									return;}
								console.log(result);
									});

								*/
							

								}

							}
						}
					}
		
				}

	}).then((response)=>{	
		for( let i=1; i< urls.length;i++){
			recursiveUrls(urls[i],urls.length);
			}
			//console.log( urls.length);
		
		}).catch( (error)=> {console.log( 'not a valid url');});
	




function headerInfo(url , callback){


axios.get( url ).then(function(response){
		
		let lastUpdate= JSON.stringify(response.headers['last-modified']);
		let date= JSON.stringify(response.headers['date']);

		let headers={ LU: lastUpdate,
			d: date
	}
		
		callback( headers);
	}

);



}

function lastModCall(data){ 
		
console.log( data.LU+ '\n'+ data.d);


};



//lastUpdated();
function parseAndStore( urlText){
	let   re = /\s*[,|\s|\.|\;|\"]\s*/

	var parsed= urlText.split(re);

	for( let i=0; i< parsed.length; i++){

		

		let q= " insert into word(wordName) values('"+ parsed[i]+"');";
		db.query( q, (err,result)=>{

			if( err){console.log(err);
				return;}
			console.log(result);
		});

	}




}

function recursiveUrls( urlHref,limit ){
		if( limit>200)return;
		axios.get( urlHref). then( (response)=>{
			const $ = cheerio.load(response.data)
		const urlElems = $('p')
	
		for (let i = 0; i < urlElems.length; i++) {
			const urlSpan=$(urlElems[i]).find('a');
			//const urlText=$(urlElems[i].text());
			for ( let i= 0; i< urlSpan.length; i++){
				if(urlSpan){

					const urlHref= $(urlSpan[i]).attr('href');
						if(urlHref!= undefined){
									let   re = /\s*[,|\s|\;|\"]\s*/

							var parsed= urlHref.split(re);

							for( let i=0; i< parsed.length; i++){

								urls.push( parsed[i]);
								let q= " insert into word(wordName) values('"+ parsed[i]+"');";
								/*
								db.query( q, (err,result)=>{

								if( err){console.log(err);
									return;}
								console.log(result);
									});

								*/
							//console.log( parsed[i]);
							recursiveUrls(  parsed[i], urls.length);
						}



							

							}
						}
					}
		
				}


		}).catch((error)=> { //console.log( 'not validi');
			} );

	






}

//db.close();

//headerInfo();

