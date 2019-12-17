var currD;

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