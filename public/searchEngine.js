$(function() {
    $('#myBtn').click(function() {
        $(this).css("color","red");
        let searchWord =$('#my_search').val();
        $('#my_search').val("random valuex");
        console.log(searchWord);
        if (searchWord != null) {
           
            api.post('/searchResults', {word: searchWord}, function(response) {
                if (response.ok) {

                    window.location.replace('/');
                }
            });
        }
    });
});