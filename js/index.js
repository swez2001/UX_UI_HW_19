
$(document).ready(function() {
    $('.Work').hover(
      function() {
        $(this).find('.dropdown').show();
      },
      function() {
        $(this).find('.dropdown').hide();
      }
    );

    $('.scrollimg').click(function() {
      var target = $('.section.active').scrollimg('.section');
      if (target.length == 0){
        target = $('.section:first');
      }
      $('html, body').animate({scrollTop: target.offset().top}, 'slow');
      $('.active').removeClass('active');
      target.addClass('active');
   
    });
  });

  
  