$(document).ready(function(){

  // Calculate widths
  var infoWidth = $('article.song:first').find('.song-info').outerWidth();
  var lyricWidth = $('article.song:first').find('.song-lyrics').outerWidth();
  var songWidth = infoWidth + lyricWidth + 20; // 20px to account for gap between the two tiles
  var windowWidthHalved = ($(window).width()-songWidth)/2 + 'px';

  // First,
  //
  // Loop through each song <article> and add required height as inline CSS
  $('article').each(function(){ 
    // read height of the song-lyrics, write to inline CSS
    var songLyricsHeight = $(this).find('.song-lyrics').outerHeight() + 'px';
    $(this).css('height', songLyricsHeight);
    $(this).find('.song-lyrics').css('height', songLyricsHeight);
    // get height of song-info, write to inline CSS
    var songInfoHeight = $(this).find('.song-info').outerHeight() + 'px';
    $(this).find('.song-info').css('height', songInfoHeight);

    // The v1 magic to make the song centered
    $(this).css('margin-left',windowWidthHalved);
  });

  // Second,
  //
  // Prime each <article> .song-lyrics by adding absolute positioning
  $('article .song-lyrics').each(function(){ 
    $(this).css('position', 'absolute');
  });
  // Prime each <article> .song-info by adding absolute positioning
  $('article .song-info').each(function(){ 
    $(this).css('position', 'absolute');
  });

});


// Third,
//
// Run a loop that checks position of each song's elements on scroll

    // Prime the loop that checks the position of each article
    var $articles = $('article'), i, len = $articles.length;

    // On scroll, check the position of each article
    $(window).scroll(function(){
      for(i = 0; i < len; i++) {
        // Set the article that is being examined for this loop
        var $article = $($articles[i]);

        // These control the position of the fixed song-info column
        function songInfoFixTop() {
          $article.find('.song-info').css('position','fixed').css('left','auto').css('top', '55px');
        }
        function songInfoUnFix() {
          $article.find('.song-info').css('position','absolute').css('left','0px').css('top','0px').css('bottom','auto');
        }
        function songInfoFixBottom() {
          $article.find('.song-info').css('position','absolute').css('left','0px').css('top','auto').css('bottom','-20px');
        }

        // Calculate the distance of an element from the top of the browser window
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $article.offset().top,
            distance      = (elementOffset - scrollTop);
        // Calculate the height of desired element (so you can determine its bottom)
        var itemHeight     = $article.outerHeight();
        // Calculate the distance of bottom of element to top of window
        var bottomDistance = (distance + itemHeight);

        // If the element is below the window, remove class "fixed"
        if (distance > 55) {
          $article.removeClass('fixed');
          songInfoUnFix();
        } else {
          // If the element is below the top of the window, add class "fixed"
          if (distance < 55) {
            $article.addClass('fixed');
            songInfoFixTop();
          }
          // This is when the song-info column should become bottom-ized
          if (bottomDistance > ($article.find('.song-info').outerHeight())+55) {
            songInfoFixTop();
          } else if (bottomDistance < ($article.find('.song-info').outerHeight())+55) {
            $article.addClass('bottomized');
            songInfoFixBottom();
          }
          // If the element is WAY below the top of the window, remove class "fixed"
          if (bottomDistance < 55) {
            $article.removeClass('fixed');    
            songInfoUnFix();
          }
        }
      }
    });


// If window is resized, recalculate + apply margin-left to each song
$(window).resize(function(){
  // Calculate widths
  var infoWidth = $('article.song:first').find('.song-info').outerWidth();
  var lyricWidth = $('article.song:first').find('.song-lyrics').outerWidth();
  var songWidth = infoWidth + lyricWidth + 20; // 20px to account for gap between the two tiles
  var windowWidthHalved = ($(window).width()-songWidth)/2 + 'px';

  $('article').each(function(){ 
    $(this).css('margin-left',windowWidthHalved);
  });

});