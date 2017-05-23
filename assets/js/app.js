$(document).ready(function() {
   var stickyNavTop = $('.menu').offset().top;

   var stickyNav = function(){
   var scrollTop = $(window).scrollTop();

   if (scrollTop > stickyNavTop) { 
      $('.menu').addClass('sticky');
	
   } else {
      $('.menu').removeClass('sticky');
    }
   };

   stickyNav();

   $(window).scroll(function() {
      stickyNav();
   });

/*== Sticky Script ==*/
  
/*== Numbers Anim Script ==*/
var war=false;
function count(){
war = $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
return true;
});
};

$( window ).scroll(function() {
if ($(window).scrollTop() > 750 && war==false && $(window).width() > 600){
count();
} 
});

/*== Numbers Anim Script ==*/

/*== Modal Popup Script ==*/

// Get the modal
var modall = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks the button, open the modal
$("#myBtn").click(function()
{ 
  $('.mod').addClass('modal-content');
  $('.mohito').addClass('modall');
  $('.mod').toggleClass('on');
});

btn.onclick = function() {
    modall.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modall.style.display = "none";
    $(".mod").removeClass("on");
    $('.mohito').removeClass('modall');
    $('.mod').removeClass('modal-content');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modall) {
        modall.style.display = "none";
        $(".mod").removeClass("on");
        $('.mohito').removeClass('modall');
        $('.mod').removeClass('modal-content');
    }
}
/*== Modal Popup Script ==*/ 

});