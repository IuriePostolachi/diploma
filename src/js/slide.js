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
        nextArrow: $('.clients-arrows__right'),
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
})