//FLEXSLIDER
var ready;
ready = function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
  });
};
$(document).ready(ready);
$(document).on('page:load', ready);

ready = function() {
  $(function() {
    var pull = $('#pull');
    var menu = $('nav ul');

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });
  $(window).resize(function() {
    var menu = $('nav ul');
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
};
$(document).ready(ready);
$(document).on('page:load', ready);

//OVERLAYS

ready = function() {
  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".effects .img").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".effects .img").mouseenter(function() {
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  }
};
$(document).ready(ready);
$(document).on('page:load', ready);

// SMOOTH NAV SCROLL 
ready = function() {
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 2000);
          return false;
        }
      }
    });
  });
};
$(document).ready(ready);
$(document).on('page:load', ready);

// WAYPOINTS
ready = function() {
  $(function() {

    $('.wp1').waypoint(function() {
      $('.wp1').addClass('animated bounceInLeft');
    }, {
      offset: '85%'
    });

    $('.wp2').waypoint(function() {
      $('.wp2').addClass('animated bounceInRight');
    }, {
      offset: '85%'
    });

    $('.wp3').waypoint(function() {
      $('.wp3').addClass('animated bounceInLeft');
    }, {
      offset: '85%'
    });

    $('.wp4').waypoint(function() {
      $('.wp4').addClass('animated fadeInUp');
    }, {
      offset: '85%'
    });

    $('.wp5').waypoint(function() {
      $('.wp5').addClass('animated fadeInUp');
    }, {
      offset: '85%'
    });

    $('.wp6').waypoint(function() {
      $('.wp6').addClass('animated fadeInUp');
    }, {
      offset: '85%'
    });

  });
};
$(document).ready(ready);
$(document).on('page:load', ready);

ready = function() {
  $('.mouse-pointer').click(function(){
      term = $(this).attr('term');
      $('.content').each(function(){    
        if ($(this).attr('term') == term){ 
          $('.content').not($(this)).hide(300);
          $(this).toggle(300);   
        }
      });
  });
};
$(document).ready(ready);
$(document).on('page:load', ready);