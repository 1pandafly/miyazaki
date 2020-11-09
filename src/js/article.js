$(document).ready(function () {
    const contentList = $('.content__list');
    const galleryView = $('#galleryView');
    const listView = $('#listView');


    if(!contentList.hasClass('content__gallery-view')) {
        articleParagraph();
    }

    galleryView.click(function () {
        $(this).addClass('view__button-active');
        listView.removeClass('view__button-active');
        contentList.addClass('content__gallery-view');
    });

    listView.click(function () {
        $(this).addClass('view__button-active');
        galleryView.removeClass('view__button-active');
        contentList.removeClass('content__gallery-view');
    });


    $(window).resize(function () {
        if(!contentList.hasClass('content__gallery-view')) {
            articleParagraph();
        }
    });
});

function articleParagraph() {
    const articles = $('.article__info');

    articles.each(function (index, item) {
        if ($(window).width() > 767) {
            $(this).prev('.article__image').css('height', `${$(this).height()}px`);
        }

        let spaceForParagraph = $(this).outerHeight(true)
            - $(this).find('.article__titles').outerHeight(true)
            - $(this).find('.article__summary').outerHeight(true);

        let fullParagraph = $(this).find('.article__paragraph').text();

        let paragraph = $(this).find('.article__paragraph');
        let articleDescription = $(this).find('.article__description');


        if (paragraph.height() > spaceForParagraph && $(window).width() > 767) {
            while (paragraph.height() > spaceForParagraph - $(this).find('.article__read-more').outerHeight(true)) {
                paragraph.text(function (index, text) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }

            $(this).find('.article__read-more').addClass('display-block');
            articleDescription.addClass('cursor-pointer');
        } else if ($(window).width() <= 767) {
            paragraph.text(fullParagraph);
            $(this).find('.article__read-more').removeClass('display-block');
        }

        if (articleDescription.hasClass('cursor-pointer')) {
            $(this).click(() => {
                paragraph.text(fullParagraph);
                $(this).find('.article__read-more').removeClass('display-block');
                $(this).closest('article').css('height', 'auto');
            });
        }
    });
}