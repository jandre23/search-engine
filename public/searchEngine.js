$(function() {
    $('#myBtn').click(function() {
        $(this).css("color","red");
        let searchWord =$('#my_search').val();
        $('#my_search').val(searchWord);
      
        //window.location.replace('/searchResults');
          
        if (searchWord != null) {
           
            api.post('/searchResults', {word: searchWord}, function(response) {
               
            });
        }
    });
});