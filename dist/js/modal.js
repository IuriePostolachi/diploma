$(document).ready(function() {
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