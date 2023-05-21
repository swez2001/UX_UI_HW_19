
$(document).ready(function() {
    $('.Work').hover(
      function() {
        $(this).find('.dropdown').show();
      },
      function() {
        $(this).find('.dropdown').hide();
      }
    );
  });