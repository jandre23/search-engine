var currD;

function getResults() {
searchBar=  document.getElementById("desk_search");
    

  var KEY_API = 'AIzaSyBODTP8nqBX2Msfb-FI1eSmsAnsQXpah7o' 
  var CSE = '007781381915227158219:lh3qtac5vak' 
  var q = document.getElementById('my_search').value;


  var API_URL = "https://www.googleapis.com/customsearch/v1?key="
              + KEY_API + "&cx=" + CSE + "&q=" + encodeURIComponent(q);


  var jsondata;

  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",API_URL,true);
  Httpreq.setRequestHeader("content-type","application/json");
  Httpreq.onreadystatechange = function (){
    if (Httpreq.readyState == 4 && Httpreq.status == 200) {
        jsondata = JSON.parse(Httpreq.responseText);
        currD=jsondata;
        var currentdata = jsonData(jsondata);
        display(currentdata);
        

    }
  }

  
  Httpreq.send();
}

function display(data){

    var count, number_results, html_display;

    count = Object.keys(data.Result).length;

     number_results = "<h3>Found "+ count +" results.</h3>";
                    

     html_display = "";

      for(var i = 0; i < count; i++){
        html_display += 
                        "<a href='" + data.Result[i].url + "'><h2>" + data.Result[i].title +
                        "<input name='indexe'  type='checkbox' style ='float: right;' value ='"+i+"''>" +
                        "</h2></a><p  style='color:#BCE125'>" + data.Result[i].url + "</p>" +
                        "<p>" + data.Result[i].description + "</p>" ;
      }

var resC= document.getElementById("resCoin");
$(resC).css("background-color","#2b303b");
    document.getElementById("sub-results-container").innerHTML = html_display;
    document.getElementById("results").innerHTML = number_results;

}

function jsonData(data){
    var url, title, description;
    var count, parsed_data;
    var tempdata =  "{\n \"Result\" : [";

    var count = data.items.length;

      for(var i = 0; i < count; i++){
        url = data.items[i].link;
        title = data.items[i].title;
        description = data.items[i].snippet;

        if(i == count - 1){
          tempdata += "{\"title\":\"" + title +
                 "\",\"url\":\"" + url +
                 "\",\"description\":\"" + description + "\"}";
        } else{
          tempdata += "{\"title\":\"" + title +
                 "\",\"url\":\"" + url +
                 "\",\"description\":\"" + description + "\"},";
        }
      }
      tempdata +="]}";


  tempdata = tempdata.replace(/(\r\n|\n|\r|)/gm,"");
  tempdata = tempdata.replace(/<b>/g,'');
  tempdata = tempdata.replace(/''/g,'');
  tempdata = tempdata.replace(/<\/\b>/g,'');
  parsed_data = JSON.parse(tempdata);
  return parsed_data;
}
function getD(){
  return jsonData(currD);
}

function returnData(){

  return currD;
}