// If a user clicks play on the top player, show the name of that song in the player...

$(document).on('click','a.sc-play',function(event){
  $('.sc-scrubber h1.currentTrack').hide();
  var trackName = $('.sc-trackslist li.active a').text();
  $('.sc-scrubber').prepend("<h1 class='currentTrack'>" + trackName + "</h1>");
  return false;
});









// If a user clicks play on any song down the page...

$(document).on('click','a.play-btn',function(event){

  // Get the track ID of song user clicked on, simulate click on that song in top player
  var track_id = $(this).data("song-id");
  $('li[data-song-id='+track_id+'] a').click();

  // Show the name of the song clicked on in the top player
  $('.sc-scrubber h1.currentTrack').hide();
  var trackName = $('.sc-trackslist li.active a').text();
  $('.sc-scrubber').prepend("<h1 class='currentTrack'>" + trackName + "</h1>");

  return false;

});








        // I don't think I need this... confirm/deny at some point.

        // function playSet() {
        //   SC.initialize({
        //     client_id: '4a01792d7496116664999da099ce9b6f'
        //   });
        // 
        //   SC.get('/playlists/8587894', {limit: 1},
        //     function(tracks) {
        //       SC.oEmbed(tracks.permalink_url, document.getElementById("target"));
        //     });
        // }


