$(document).ready(function(){
    for (var i = 1; i <= $('.slider__slide').length; i++) {
        $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>');
    }
    setTimeout(function(){
        $('.slider__wrap').addClass('slider__wrap--hacked');
    }, 1000);

    // Initialize the slider
    goToSlide(1);

    // Set the interval for auto-slide
    setInterval(function(){
        var currentSlide = Number($('.slider__slide--active').data('slide'));
        var totalSlides = $('.slider__slide').length;
        currentSlide++;
        if (currentSlide > totalSlides) {
            currentSlide = 1;
        }
        goToSlide(currentSlide);
    }, 9000); // Change slides every 3 seconds
});

function goToSlide(number) {
    $('.slider__slide').removeClass('slider__slide--active');
    $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}

$('.slider__next, .go-to-next').on('click', function() {
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = $('.slider__slide').length;
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    goToSlide(currentSlide);
});
