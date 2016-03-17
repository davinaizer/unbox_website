// jshint devel:true
console.log('\'Allo \'Allo!');

$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});



// Carousel Client

$(document).ready(function () {

    var obj = $("#owl-demo");
    if (obj.length) {
        obj.owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds

            items: 6,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 4]
        });
    }
});


// NavBar scrolling feature

(function ($) {
    $(document).ready(function () {

        // function to check NavBar changes
        var sepTopOffset = $('#top-separator').offset().top;

        function changeNav() {
            var objDist = sepTopOffset - $(window).scrollTop();
            if (objDist <= 0) {
                $('#navbar-top').removeClass('navbar-bg');
                $('#navbar-top').addClass('navbar-hidden');
            } else {

                $('#navbar-top').addClass('navbar-bg');
                $('#navbar-top').removeClass('navbar-hidden');
            }
        };

        $(function () {
            $(window).scroll(changeNav);
        });
    });
}(jQuery));


// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});



// Button Down

$(document).ready(function () {
    $(buttonDown).mouseenter(function () {
        $(buttonDown).fadeTo('fast', 0.8);
    });
    $(buttonDown).mouseleave(function () {
        $(buttonDown).fadeTo('fast', 1);
    });
});