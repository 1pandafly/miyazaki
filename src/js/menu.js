$(document).ready(function () {
    const menuButton = $('.menu__button');
    const menuList = $('.header__menu-list');
    const body = $('body');

    menuButton.click(() => {
        menuList.toggleClass('menu__list--open');
        body.toggleClass('position-fixed');
        menuButton.toggleClass('menu__button--open');
    });
});