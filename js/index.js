
$(document).ready(function() {

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

    // Change in state of nav bar
    $(document).ready(function() {
      $('.burgerMenu').click(function() {
        $('ul.normalMenu').slideToggle();
      });
    });

    
  });

  
  