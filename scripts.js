$(document).ready(function(){
   // Add smooth scrolling to all links
   var TIMER = 1000;

   $("a").on('click', function(event) {

     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, TIMER, function(){

         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });

   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").toggleClass("active");
   });

  $("#scroll-arrow").click(function(){
    var aid = 'scroll-anchor'
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  })
});
