function callAPI(method, url, message, successCallback) {
    // Show the message in the console
    console.log(method + ' request to /api' + url + ':');
    console.log(message);
    
    $.ajax({
        type: method,
        url: '/api' + url,
        data: message,
        success: function(data, textStatus) {
            if (data.ok === false) {
                console.error('API error: ' + data.content.reason);
            }
            
            // Show the response in the console
            console.log('API response:');
            //console.log(data);
            
            successCallback(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error: ' + textStatus + ': ' + errorThrown);
        }
    });
}

function callResults( method,url,message,successCallback)
{

  console.log(method + ' request to /searchEngine' + url + ':');
    console.log(message);
    
    $.ajax({
        type: method,
        url: '/searchEngineResults' + url,
        data: message,
        success: function(data, textStatus) {
            if (data.ok === false) {
                console.error('error: ' + data.content.reason);
            }
            
            // Show the response in the console
            console.log('API response:');
            //console.log(data);
            
            successCallback(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Error: ' + textStatus + ': ' + errorThrown);
        }
    });
}

api = {
    get: function(url, message, successCallback) {
        callAPI('GET', url, message, successCallback);
    },
    post: function(url, message, successCallback) {
        callAPI('POST', url, message, successCallback);
    },
    put: function(url, message, successCallback) {
        callAPI('PUT', url, message, successCallback);
    },
    delete: function(url, message, successCallback) {
        callAPI('DELETE', url, message, successCallback);
    }
};

searchResults={ 

post: function (url, message, successCallback){
    callResults( 'POST', url, message,successCallback);
    }

}