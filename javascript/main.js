
// Hide/Show the top player on initial scroll
$(window).scroll(function(){

  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('.songs-wrapper').offset().top,
      distance      = (elementOffset - scrollTop);

  console.log(distance);
  if (distance < 80) {
    $('.intro.hidden').slideToggle(141).removeClass('hidden').addClass('visible');
  }
  
  if (!$('body').hasClass('playing')) {
    if (distance > 80) {
      $('.intro.visible').fadeOut('fast').removeClass('visible').addClass('hidden');
    }
  }

});

// Animate in the first song (to hide the jiggle of the content centering itself)
$(document).ready(function(){ 
  $(".songs-wrapper article").css("margin-top","30px");
  setTimeout(function(){ 
    $(".songs-wrapper article").animate({
      opacity:'1',
      marginTop: '0px'
    });
  }, 250);
});