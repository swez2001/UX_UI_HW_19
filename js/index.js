
$(document).ready(function() {
    // $('.Work').hover(
    //   function() {
    //     $(this).find('.dropdown').show();
    //   },
    //   function() {
    //     $(this).find('.dropdown').hide();
    //   }
    // );

    $('.Work').click(function(event) {
      event.preventDefault();
      if ($(this).find('.dropdown').is(":visible")){
        $(this).find('.dropdown').hide();
      
      }else{
        $(this).find('.dropdown').show();
      }
    });
    
    $('.scroll-down').click(function(event) {
      event.preventDefault();
      //console.log("click the button");
      const myWork = document.getElementById('MyWorkSection');
      //console.log(myWork);
      myWork.scrollIntoView({ behavior: "smooth" });
      // var target = $('.section.active').scrollimg('.MyWork');
      // if (target.length == 0){
      //   target = $('.MyWork:first');
      // }
      // $('html, body').animate({scrollTop: target.offset().top}, 'slow');
      // $('.active').removeClass('active');
      // target.addClass('active');
   
    });

    // $('.scrollimg').click(function() {
    //   var target = $('.section.active').scrollimg('.section');
    //   if (target.length == 0){
    //     target = $('.section:first');
    //   }
    //   $('html, body').animate({scrollTop: target.offset().top}, 'slow');
    //   $('.active').removeClass('active');
    //   target.addClass('active');
   
    // });
  });

  
  