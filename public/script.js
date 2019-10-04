$('.carousel').carousel({
    interval: false
})

$('.carousel-indicators').on('mouseenter', () => {
    $('.indicators-bg').css('opacity', 1);
}).on('mouseleave', () => {
    $('.indicators-bg').css('opacity', 0);
});

var w = window.innerWidth;
var h = window.innerHeight;

$( window ).on('resize', function() {
    w = window.innerWidth;
    h = window.innerHeight;
    calculateAspectRatio();
});

$( document ).ready(function() {
    calculateAspectRatio();
});

function calculateAspectRatio() {
    var boxWidth = w;
    var boxHeight = h;

    if (w > 1920 && h > 1080) {
        var boxWidth = 1920;
        var boxHeight = 1080;
    } else {
        ( w/h ) > ( 16/9 )
            ? boxWidth = calculateRatioWidth(h) // There are black areas on the left and right sides
            : boxHeight = calculateRatioHeight(w); // There are black areas on the top and bottom part of the screen
    }

    $('#main-carousel').css({width: boxWidth + 'px', height: boxHeight + 'px'});
    
    // set base font size of HTML element according to the size of the content box
    $('html').css({'font-size': calculateFontSize(boxWidth)});
}

function calculateRatioHeight(width){ return Math.round((width/16)*9); }
function calculateRatioWidth(height){ return Math.round((height/9)*16); }
function calculateFontSize(width){ return (width/1920)*16; }