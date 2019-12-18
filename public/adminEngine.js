$(function() {
    $('#AE').click(function() {
        
        $(this).css("color","red");
        let searchWord =$('#my_search').val();
        $('#my_search').val(searchWord);
        //check if valid url
        //var result= url.parse(searchWord);

        if (searchWord != "") {
           
           api.post('/adminResults', {word: searchWord}, function(response) {
               if(response.ok)window.location.replace('/adminEngineResults/'+searchWord);
               
            });
        }
    });
});

