//= require jquery/dist/jquery.min
//= require jquery.easing/js/jquery.easing.min.js
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require fastclick/lib/fastclick.js

$(document).ready(function () {
  
  // Enable FastClick
  FastClick.attach(document.body);

  $('.navbar-brand').click(function (event) {
    $("html, body").animate({
        scrollTop: 0
    }, 800, 'easeInOutExpo');
    event.preventDefault();
    return false;
  });

  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  $('#coming-soon').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 60)
    }, 800, 'easeInOutExpo');
    event.preventDefault();
  });

});
  