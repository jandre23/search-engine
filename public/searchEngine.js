$(function() {
    $('#SE').click(function() {

        $(this).css("color","red");
        let searchWord =$('#my_search').val();
        $('#my_search').val(searchWord);
      
        if (searchWord != "") {
           
           api.post('/searchResults', {word: searchWord}, function(response) {

               if(response.ok)window.location.replace('/searchEngineResults/'+searchWord);

            });
        }
    });
});

