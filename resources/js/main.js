(function ($) {
    "use strict";
    jQuery(document).ready(function($){


// sticky top

    $(".sticky-js").waypoint(function(direction){
          if(direction == "down"){

            $(".header-area").addClass("fixed-top");

          } else {

           $(".header-area").removeClass("fixed-top");

          }

      });


// mobile menu js

  var val = 1;

  $(".nav-bar").click(function(){


    if (val == 1) {

      $(".mobile-menu nav").animate({
        'left' : '0'
      });
      val = 0;
    }else{
      val = 1;
      $(".mobile-menu nav").animate({
        'left' : '-100%'
    });
    }



    return false;
  });

  // submenu
  $('.sub-menu').click(function(){
    $(this).children('.children').slideToggle();
  })
// all Ul li a Hover js
  $('ul li a').click(function(){
    $('li a').removeClass("active-bg");
    $(this).addClass("active-bg");
});

// dropdown hover js
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

      
  // *owlCarousel js here*
  $(".job-slider").owlCarousel({
  items: 1, 
  loop:true,
  dots: false,
  nav: true,
  autoplay:true,
  responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }

});
      
  // *owlCarousel js here*
  $(".testimonial-carousel").owlCarousel({
  items: 1, 
  loop:true,
  dots: true,
  nav: false,
  autoplay:true,
  responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:1,
            nav:false,
            
        }
    }

});
// number count for stats, using jQuery animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});
// add class & remove class js here
  // $("").on('click', function() {
  //  $(".").addClass("");

  // });

  // $(".").on('click', function() {
  // $(".").removeClass('active');

  // });


// magnificPopup js here

  // $(".video-play-btn").magnificPopup({
  //  type: 'video'
  // });

});


  
jQuery(window).load(function(){

});


}(jQuery));

