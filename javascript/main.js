$(window).scroll(function(){

  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('.songs-wrapper').offset().top,
      distance      = (elementOffset - scrollTop);

  console.log(distance);
  if (distance < 80) {
    $('.intro.hidden').slideToggle('fast').removeClass('hidden').addClass('visible');
  }
  
  if (!$('body').hasClass('playing')) {
    if (distance > 80) {
      $('.intro.visible').fadeOut('fast').removeClass('visible').addClass('hidden');
    }
  }

});