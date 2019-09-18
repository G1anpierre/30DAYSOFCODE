$(document).ready(function(){
            
    $('#boton1').on("click", function() {
        
        $('.display.result').text("");
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            cache: false,
            data: { action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json' },
            dataType: 'jsonp',
            success: processResult
        });
    });

    $('#boton2').on("click", function(){
        location.href = " https://en.wikipedia.org/wiki/Special:Random";
    });


}); 

function processResult(apiResult){
  $('.display-result').empty();
  for(var i = 0; i < apiResult.query.search.length; i++){

      $('.display-result').append('<li>'+ '<strong>'+ '<a href="https://en.wikipedia.org?curid=' + apiResult.query.search[i].pageid + '"'  +'>'+apiResult.query.search[i].title + '</a>'+ '</strong>'+ '</li>');
      $('.display-result').append('<p>' + apiResult.query.search[i].snippet + '</p>');
      console.log(apiResult.query.search[i]);
 }
}

