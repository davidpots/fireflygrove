// If a user clicks play on the top player, show the name of that song in the player...

$(document).on('click','a.sc-play',function(event){
  // Show the name of the song 
  $('.sc-scrubber h1.currentTrack').remove();
  var trackName = $('.sc-trackslist li.active a').text();
  $('.sc-scrubber').prepend("<h1 class='currentTrack'>" + trackName + "</h1>");

  return false;
});

// SONG-INFO play/pause interaction

        // If user clicks play (for inactive song)
        $(document).on('click','a.play-btn.play.passive',function(event){

          // Tweak the song-info play/pause control on this AND other songs
          $('a.play-btn.playing').removeClass('playing').removeClass('paused').addClass('passive').show();
          $('a.play-btn.paused').removeClass('paused').hide();
          $(this).removeClass('passive').addClass('playing');

          // Get the track ID of song user clicked on, simulate click on that song in top player
          var track_id = $(this).data("song-id");
          $('li[data-song-id='+track_id+'] a').click();

          // Add classes to <body> to designate which song is playing
          $('body').removeClass(); // gets rid of playing classes from other songs
          $('body').addClass('playing');
          $('body').addClass('playing-'+track_id);

          // Show the name of the song 
          $('.sc-scrubber h1.currentTrack').remove();
          var trackName = $('.sc-trackslist li.active a').text();
          $('.sc-scrubber').prepend("<h1 class='currentTrack'>" + trackName + "</h1>");

          return false;
        });

        // If user pauses active song
        $(document).on('click','a.play-btn.playing',function(event){
          $(this).removeClass('playing').addClass('paused');

          // simulate top player click
          var track_id = $(this).data("song-id");
          $('li[data-song-id='+track_id+'] a').click();

          // add 'paused' class from top player
          $('.sc-player').addClass('paused');
          
          return false;
        });

        // If user un-pauses active song
        $(document).on('click','a.play-btn.paused',function(event){
          $(this).removeClass('paused').addClass('playing');
          
          // simulate top player click
          var track_id = $(this).data("song-id");
          $('li[data-song-id='+track_id+'] a').click();
          
          // remove 'paused' class from top player
          $('.sc-player').removeClass('paused');

          return false;
        });