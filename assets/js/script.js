$(document).ready(function(){
    // Mobile Menu Icon
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.header-nav nav').slideToggle();
   });




   // aos

    // Fakes the loading setting a timeout
    setTimeout(function() {
      $('body').addClass('loaded');
   }, 3500);

   AOS.init({
        duration: 800,
    });


});












 
  

