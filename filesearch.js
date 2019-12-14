
var parsedData;
var checkboxes = document.getElementsByName("indexe");
var selectedboxes = [];
DLfileType;
var fileType=  function(){
  var selection1=$( "#myselect option:selected" );

if(selection1.text()=="json"){
  document.getElementById("selectFiles").accept=".json";
  console.log(selection1.text());
}
  else if(selection1.text()=="xml"){ document.getElementById("selectFiles").accept=".xml";}
   else if( selection1.text()=="csv"){ document.getElementById("selectFiles").accept=".csv";
  }

};


var DLfileType=  function(){
  var selection1=$( "#myselect option:selected" );

if(selection1.text()=="json"){
  document.getElementById("selectFiles").accept=".json";
  console.log(selection1.text());
}
  else if(selection1.text()=="xml"){ document.getElementById("selectFiles").accept=".xml";}
   else if( selection1.text()=="csv"){ document.getElementById("selectFiles").accept=".csv";
  }

};

var clickableF = function() {
    
 var selection=$( "#myselect option:selected" );
var files = document.getElementById("selectFiles").files;


  if (files.length <= 0) {
    return false;
  }
var resC= document.getElementById("resCoin");
$(resC).css("background-color","#2b303b")
  var fr = new FileReader();
  var file_name;
  
  fr.onload = function(e) { 
       searchBar=  document.getElementById("desk_search");
    searchBar.style.top="10%"
    
   file_name=  files[0].name;
   
  if(selection.text()=="xml"){  
    parser = new DOMParser();
    console.log("xml file uploaded");
        parsedData = parser.parseFromString(e.target.result,"text/xml");
        displayXML(parsedData);}
   else if( selection.text()=="csv"){displayCSV(e.target.result);
  }
  else{
parsedData = JSON.parse(e.target.result);
        displayJSON(parsedData);

}


    
  }

  fr.readAsText(files.item(0));
};


function displayJSON(data){

    var count = Object.keys(data.Result).length;
    var rCount= "<h3>Found "+ count +" results.</h3>" ;
    var htmlOut = "";

      for(var i = 0; i < count; i++){
        htmlOut +=      "<a href='" + data.Result[i].url + "'><h2>" + data.Result[i].title +
                        "<input name='indexe' type='checkbox' style ='float: right;' value ='"+i+"''>" +
                        "</h2></a><p style='color:#BCE125'>" + data.Result[i].url + "</p>" +
                        "<p>" + data.Result[i].description + "</p>";
      }
   

    
    document.getElementById("results").innerHTML = rCount;
    document.getElementById("sub-results-container").innerHTML = htmlOut;
}


function displayXML(data){
  var title;
  var url;
  var description;
  var jsonText;
  var  count = data.getElementsByTagName("title").length;
  var rCount= "<h3>Found "+ count +" results.</h3>" ;



  jsonText =  "{ \"Result\" : [";
  var htmlOut = "";
      for(var i = 0; i < count; i++){

        url = data.getElementsByTagName("url")[i].childNodes[0].nodeValue;
        title = data.getElementsByTagName("title")[i].childNodes[0].nodeValue;
        description = data.getElementsByTagName("description")[i].childNodes[0].nodeValue

        htmlOut +=  "<h2>" + title +
                        "<input name='indexe' type='checkbox' style ='float: right;' value ='"+i+"''>" +
                        "</h2></a><p style='color:#BCE125'>" + url + "</p>" +
                        "<p>" + description + "</p>" ;


                        if(i == count-1){
                          jsonText += "{\"title\":\"" + title +
                                 "\",\"url\":\"" + url +
                                 "\",\"description\":\"" + description + "\"}";
                        } else{
                          jsonText += "{\"title\":\"" + title +
                                 "\",\"url\":\"" + url +
                                 "\",\"description\":\"" + description + "\"},";
                        }

      }
    jsonText +="]}";
    document.getElementById("results").innerHTML = resultNum;
    document.getElementById("sub-results-container").innerHTML = htmlOut;
    
    parsedData = JSON.parse(jsonText);
    

}

function displayCSV(data){
    var arr = [];
    var doubleArr = [];
    var temp = [];

    var title;
    var url;
    var description;

    var jsonText;

    arr = data.split("\n");
    

    for( var i = 0; i < arr.length; i++){
      temp = arr[i].split(",");
      doubleArr[i] = [];
        for(var j = 0; j < temp.length; j++){
          doubleArr[i][j] = temp[j];
    }
  }


    count = arr.length;
    var resultNum = "<h3>Found "+ count +" results.</h3>" ;
                   
    var htmlOut = "";
    jsonText =  "{ \"Result\" : [";
      for(var i = 0; i < count; i++){
          title = doubleArr[i][0];
          url = doubleArr[i][1];
          description = doubleArr[i][2];

          htmldisplay +=  "<h2>" + title +
                          "<input name='indexe' type='checkbox' style ='float: right;' value ='"+i+"''>" +
                          "</h2></a><p style='color:#BCE125'>" + url + "</p>" +
                          "<p>" + description + "</p>" ;

                          if(i == count-1){
                            
                            jsonText += "{\"title\":\"" + title +
                                   "\",\"url\":\"" + url +
                                   "\",\"description\":\"" + description + "\"}";
                          } else{
                            jsonText += "{\"title\":\"" + title +
                                   "\",\"url\":\"" + url +
                                   "\",\"description\":\"" + description + "\"},";
                          }
      }
    jsonText +="]}";
    document.getElementById("results").innerHTML = resultNum;
    document.getElementById("sub-results-container").innerHTML = htmldisplay;

   
    parsedData = JSON.parse(jsonText);

}

 function dlFiletype(){

  var dlbutton= document.getElementById("dlbutton");
  var dropCheck=document.getElementById("dl-drop1");
  var  r= document.getElementById("sub-results-container");


    if (($(r).children().length)>0){
    console.log("empty");
    $(dropCheck).css("display","inline");
  }

var csvDL=document.getElementById("csvDL");
var jsonDL=document.getElementById("jsonDL");
var xmlDL=document.getElementById("xmlDL");


dropDownClick(csvDL);
dropDownClick(jsonDL);
dropDownClick(xmlDL);




 }

 function dropDownClick(fType){

  $(fType).click(function(){
    downL(fType);





  })
 }



    function downL(DLfiletype){
  var url, title, description;
  var urlDownLoad;
  var txt = "";

    for(var i = 0; i < checkboxes.length; i++) {
      if(checkboxes[i].checked){
        selectedboxes.push(i);
      }
    }

    if(DLfiletype.id == "jsonDL"){
      if(typeof parsedData=='undefined')
        {parsedData= getD();
console.log(parsedData);
        }
        txt =  "{ \"Result\" : [";
        var num;
        for(var i = 0; i < selectedboxes.length; i++){
          num = selectedboxes[i];
          if(i == selectedboxes.length-1){
            
            txt += "{\"title\":\"" + parsedData.Result[num].title + "\",\"url\":\"" +
                              parsedData.Result[num].url + "\",\"description\":\"" +
                              parsedData.Result[num].description + "\"}";
          } else{
            txt += "{\"title\":\"" + parsedData.Result[num].title + "\",\"url\":\"" +
                              parsedData.Result[num].url + "\",\"description\":\"" +
                              parsedData.Result[num].description + "\"},";
          }
      }
      txt +="]}";
      urlDownLoad = "<a href= 'data:text/plain," +  txt + " ' download=\"file.json\"\>Download JSON</a>";
      filetype = "";
    }

    else if(DLfiletype.id == "csvDL"){
      if(typeof parsedData=='undefined')
        {parsedData= getD();
console.log("csv DL data");
        }
      var num;
      for(var i = 0; i < selectedboxes.length; i++){
        num = selectedboxes[i];
        url = parsedData.Result[num].url;
        title = parsedData.Result[num].title;
        description = parsedData.Result[num].description;

        txt += title + "," + url + "," + description + "\n"
      
      }
      urlDownLoad = "<a href= 'data:text/plain," +  txt + " ' download=\"file.csv\"\>Download CSV</a>";
    }

    else if(DLfiletype.id == "xmlDL"){
      if(typeof parsedData=='undefined')
        {parsedData= getD();
console.log("xml search dl");
        }
      txt =  '<?xml version="1.0" encoding="UTF-8"?>\n<results>\n';
      var num;
      for(var i = 0; i < selectedboxes.length; i++){
        num = selectedboxes[i];
        url = parsedData.Result[num].url;
        title = parsedData.Result[num].title;
        description = parsedData.Result[num].description
        ;

        txt += "<result>\n<title>"+ title +"</title>\n" +
                "<url>"+ url +"</url>\n" +
                "<description>"+ description +"</description>\n</result>\n";
      }
      txt +="</results>";
      urlDownLoad = "<a href= 'data:text/plain," +  txt + " ' download=\"file.xml\"\>Download XML</a>";
    }

    document.getElementById("dLanchor").innerHTML = urlDownLoad;

  
    selectedboxes.length = 0;
  }
