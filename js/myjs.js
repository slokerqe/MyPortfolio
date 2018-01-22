
/*
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("navbar-scroll").style.top = "0";
  } else {
      document.getElementById("navbar-scroll").style.top = "-50px";
  }
}



*/




// SCROLL DOWN BUTTON
//.............../

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
  
});
 // END SCROLL DOWN BUTTON