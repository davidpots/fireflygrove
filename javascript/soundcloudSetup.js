// Attempt to hard-wire songs via passing JSON id
$(document).ready(function(){
  $('.play-btn').click(function(){
    var track_id = $(this).data("song-id");
    $('li[data-song-id='+track_id+'] a').click();
    return false
  });
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


