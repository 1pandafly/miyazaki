$(document).ready(function () {
    const chatButton = $('.chat__button');
    const chatBox = $('.chat__box');

    chatButton.click(() => {
        chatBox.toggleClass('display-block');
    });
});