$(document).ready(function () {
    articleParagraph();

    $(window).resize(function () {
        articleParagraph();
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