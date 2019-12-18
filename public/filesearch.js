
var parsedData;
var checkboxes = document.getElementsByName("index");
var selectedboxes = [];




$(document).ready(function(){
    $("#myselect").change(function(){
        var filet = $(this).children("option:selected").val();
        
    });
});






 function dlFiletype(){

var filet;
  $(document).ready(function(){
    filet = $("#myselect").children("option:selected").val();
     
     downL(filet);
});
}


function downL(DLfiletype){
  var url, title, description;
  var urlDownLoad;
  var txt = "";
console.log(DLfiletype);
    for(var i = 0; i < checkboxes.length; i++) {
      if(checkboxes[i].checked){
        selectedboxes.push(i);
      }
    }

    if(DLfiletype== "json"){
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

    else if(DLfiletype == "csv"){
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

    else if(DLfiletype== "xml"){
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
