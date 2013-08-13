$(function(){
  // var banana = $('.sc-trackslist li.active a').text();
  // alert(banana);
});

// Added: shows the name of the current song
$(document).on('click','a.sc-play',function(event){
  $('.sc-scrubber h1.currentTrack').hide();
  var trackName = $('.sc-trackslist li.active a').text();
  $('.sc-scrubber').prepend("<h1 class='currentTrack'>" + trackName + "</h1>");
  return false;
});