// global variables
var searchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
var apiKey = 'AIzaSyD5CmOB7Z6uaLwm1EMdL2SUdCTv6Ikjg0s';
var youtubeUrl = 'https://www.youtube.com/watch?v=';

// functions

function searchResults(data) {
  var results = $('.results');
  results.empty();
  data.items.forEach(function(item) {
    var searchItemLink = youtubeUrl + item.id.videoId;
    var imageLink = item.snippet.thumbnails.medium.url;
    var image = '<a href="' + searchItemLink + '" target="_blank"><img class="card-img-top" src="'+ imageLink +'" /></a>';
    var elem = '<li class="card">' + image + '</li>';
    results.append(elem);
  });
}

function searchYouTube(text, handleResultsFn) {
  var data = {
    part: 'snippet',
    key: apiKey,
    q: text,
  }

  $.getJSON(searchApiUrl, data, handleResultsFn);
}

function handleSearchSubmit() {
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchText = $(event.currentTarget).find('.search-text').val().trim();
    searchYouTube(searchText, searchResults);
  });
}

$(document).ready(function() {
  handleSearchSubmit();
});
