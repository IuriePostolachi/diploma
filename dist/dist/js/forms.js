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
});

$(document).ready(function() {
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
});

$(document).ready(function() {
    $('.phone').mask('+8 (999) 999-99-99')
});