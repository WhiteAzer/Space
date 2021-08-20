$(function(){
    $(".slider__box").slick({
        prevArrow: '<img src="img/arrow.svg" class="slider__arrow slider__arrow-left" alt="arrow-left">',
        nextArrow: '<img src="img/arrow.svg" class="slider__arrow slider__arrow-right" alt="arrow-right">',
    });

    $(".menu__btn").on("click", function() {
        $(".menu__list").toggleClass("active");
    });
});

