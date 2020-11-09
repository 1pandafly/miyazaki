$(document).ready(function () {
    const chat = $('.chat');
    const chatButton = $('.chat__button');
    const chatBox = $('.chat__box');

    chatButton.click(() => {
        chatBox.toggleClass('display-block');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            chat.addClass('display-block');
        } else {
            chat.removeClass('display-block');
        }
    });
});