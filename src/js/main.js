$(document).ready(function() {
    $(".hero-form").validate({
        rules: {
            username: "required",
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            field: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Пожалуйста введите ваше имя",
                minlength: jQuery.validator.format("Длина от {0} букв"),
                maxlength: jQuery.validator.format("Длина до {0} букв")
            },
            field: {
                required: "Введите ваш номер"
            },
            email: {
                required: "На e-mail отправим информацию",
                email: "Введите e-mail правильно"
            }
        }
    });
    $(".modal-form").validate({
        rules: {
            username: "required",
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            field: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "Пожалуйста введите ваше имя",
                minlength: jQuery.validator.format("Длина от {0} букв"),
                maxlength: jQuery.validator.format("Длина до {0} букв")
            },
            field: {
                required: "Введите ваш номер"
            },
            email: {
                required: "На e-mail отправим информацию",
                email: "Введите e-mail правильно"
            }
        }
    });
    $('.phone').mask('+8 (999) 999-99-99')
        // переменная кнопки NavBar-a "Перезвоните мне"
    var button = $('.button');
    // переменная модального окна активируемой кнопкой "Перезвоните мне"
    var kits = $('#kits');
    // переменная модального окна активируемой кнопкой "Перезвоните мне"
    var modal = $('#modal');
    // переменная кнопки "закрыть модальное окно"
    var close = $('.close');
    // переменная кнопки "отправить" модального окна
    var send = $('.send');
    // переменная кнопки меню со ссылкой на комплектация макетов
    var link = $('.modal-link')
        // открытие модального окна отправки форм
    button.on('click', function() {
        modal.addClass('modal__active');
    });
    // открытие модального окна комплектация макетов
    link.on('click', function() {
        kits.addClass('kits__active');
    });
    // закрытие модального окна отправки форм и комплектация макетов
    close.on('click', function() {
        modal.removeClass('modal__active');
        kits.removeClass('kits__active');
    });
});
jQuery(document).ready(function() {
    jQuery(".scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 40;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
    $('#tab_cm1').click(function() {
        // Табы
        $('#tab_cm1').addClass('active');
        $('#tab_cm2').removeClass('active');
        $('#tab_cm3').removeClass('active');
        // Содержание
        document.getElementById('cont_tabcm1').style.display = 'block';
        document.getElementById('cont_tabcm2').style.display = 'none';
        document.getElementById('cont_tabcm3').style.display = 'none';
    });
    $('#tab_cm2').click(function() {
        // Табы
        $('#tab_cm1').removeClass('active');
        $('#tab_cm2').addClass('active');
        $('#tab_cm3').removeClass('active');
        // Содержание
        document.getElementById('cont_tabcm1').style.display = 'none';
        document.getElementById('cont_tabcm2').style.display = 'block';
        document.getElementById('cont_tabcm3').style.display = 'none';
    });
    $('#tab_cm3').click(function() {
        // Табы
        $('#tab_cm1').removeClass('active');
        $('#tab_cm2').removeClass('active');
        $('#tab_cm3').addClass('active');
        // Содержание
        document.getElementById('cont_tabcm1').style.display = 'none';
        document.getElementById('cont_tabcm2').style.display = 'none';
        document.getElementById('cont_tabcm3').style.display = 'block';
    });
    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.portfolio-arrows__left'),
        nextArrow: $('.portfolio-arrows__right')
    });
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
    });
    // подключаем слайдер slick
    $('.projects__slider').slick({
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        fade: true
    });

    // подключаем слайдер OWL
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 32.2,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });
    // прокруткa слайдера на кнопки
    var owl = $('.owl-carousel');

    owl.owlCarousel();
    $('.clients__left-arrow').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.clients__right-arrow').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

    /* Инициализация скрипта wow.js */
    new WOW().init();
});