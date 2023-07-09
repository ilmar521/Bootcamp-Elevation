
$('#search_button').on('click', function(){      
    let userInput = $('input').val().trim();    
    userInput = userInput.replace(/ /g, "+");
    $.ajax({url: `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=4OERPiFQVFPIgF4PODJLS3jtMInz5LOH`, method: 'GET'}).done(function(response){
        const giphyURL = response.data[0].embed_url;
        $('iframe').attr('src', giphyURL);
    })
})