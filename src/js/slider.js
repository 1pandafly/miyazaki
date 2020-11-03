$(document).ready(function () {
    $('.slider__wrapper').slick({
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="36" height="36">\n' +
            '                <use class="menu__icon-menu" href="assets/images/sprite.svg#chevron-left"></use>\n' +
            '            </svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="36" height="36">\n' +
            '                <use class="menu__icon-menu" href="assets/images/sprite.svg#chevron-right"></use>\n' +
            '            </svg></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '50px',
                }
            },
        ]
    });
});