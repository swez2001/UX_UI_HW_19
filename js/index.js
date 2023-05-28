
$(document).ready(function() {
    // $('.Work').hover(
    //   function() {
    //     $(this).find('.dropdown').show();
    //   },
    //   function() {
    //     $(this).find('.dropdown').hide();
    //   }
    // );


    // Work Tab Dropdown when clicked & hides when not clicked
    $('.Work').click(function(event) {
      event.preventDefault();
      if ($(this).find('.dropdown').is(":visible")){
        $(this).find('.dropdown').hide();
      
      }else{
        $(this).find('.dropdown').show();
      }
    });
    

    // Scroll function - When Down Arrow Icon is clicked page scrolls to the Work Section
    $('.scroll-down').click(function(event) {
      event.preventDefault();
      const myWork = document.getElementById('MyWorkSection');
      myWork.scrollIntoView({ behavior: "smooth" });
   
    });

    $(document).ready(function() {
      $('.burgerMenu').click(function() {
        $('ul.normalMenu').slideToggle();
      });
    });

    
  });

  
  