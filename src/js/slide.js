$(document).ready(function() {
    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.portfolio-arrows__left'),
        nextArrow: $('.portfolio-arrows__right')
    })
    $('.clients-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.clients-arrows__left'),
        nextArrow: $('.clients-arrows__right')
    })
})