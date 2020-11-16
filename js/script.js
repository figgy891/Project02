$( document ).ready(function() {
  console.log( "ready!" );

  $('#search-button').on('click', () => {
    let searchTerm = $('#search-field').val();
    console.log(searchTerm);
    let url = "https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=" + searchTerm;

    // jquery way of doin it
    $.get(url, function(giphyResponse) {
      let resultsHtml = '';
      for (let image of giphyResponse.data) {                
        let imgHtml = `<img src=${image.images.original.url} class="col-12 col-sm-6 col-md-4 col-lg-3" style="padding: 2px"/>`
        resultsHtml = resultsHtml + imgHtml;          
      }

      console.log(resultsHtml);

      $('#search-results').html(resultsHtml);

    });
  })
});