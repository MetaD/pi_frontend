$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--section-form').waypoint(function(direction) {
        if (direction == "down") {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    }, {
      offset: '80px;'
    });

	/* Scroll */
    $('.js--scroll-to-reg').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000); 
    });
    
});
    