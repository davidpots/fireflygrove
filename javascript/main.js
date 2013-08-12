$(document).ready(function(){
  // Loop through each <article> and add the height as inline CSS
  $('article').each(function(){ 

    var primaryHeight = $(this).find('.primary').outerHeight() + 'px';
    $(this).css('height', primaryHeight);
    $(this).find('.primary').css('height', primaryHeight);

    var secondaryHeight = $(this).find('.secondary').outerHeight() + 'px';
    $(this).find('.secondary').css('height', secondaryHeight);

    var bottomMargin = "80px";
    $(this).css('margin-bottom', bottomMargin);
  });
  // Prime each <article> .primary by adding absolute positioning
  $('article .primary').each(function(){ 
    $(this).css('position', 'absolute');
  });
  // Prime each <article> .secondary by adding absolute positioning
  $('article .secondary').each(function(){ 
    $(this).css('position', 'absolute');
  });
});

// Prime the loop that checks the position of each article
var $articles = $('article'), i, len = $articles.length;

// On scroll, check the position of each article
$(window).scroll(function(){
  for(i = 0; i < len; i++) {
    // Set the article that is being examined for this loop
    var $article = $($articles[i]);

    // These control the position of the fixed secondary column
    function secondaryFixTop() {
      $article.find('.secondary').css('position','fixed').css('left','20px').css('top', '0px');
    }
    function secondaryUnFix() {
      $article.find('.secondary').css('position','absolute').css('left','20px').css('top','0px').css('bottom','auto');
    }
    function secondaryFixBottom() {
      $article.find('.secondary').css('position','absolute').css('left','20px').css('top','auto').css('bottom','-40px');
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
    if (distance > 0) {
      $article.removeClass('fixed');
      secondaryUnFix();
    } else {
      // If the element is below the top of the window, add class "fixed"
      if (distance < 0) {
        $article.addClass('fixed');
        secondaryFixTop();
      }
      // This is when the secondary column should become bottom-ized
      if (bottomDistance > $article.find('.secondary').outerHeight()) {
        secondaryFixTop();
      } else if (bottomDistance < $article.find('.secondary').outerHeight()) {
        $article.addClass('bottomized');
        secondaryFixBottom();
      }
      // If the element is WAY below the top of the window, remove class "fixed"
      if (bottomDistance < 0) {
        $article.removeClass('fixed');    
        secondaryUnFix();
      }
    }
  }
});