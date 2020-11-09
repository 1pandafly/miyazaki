$(document).ready(function () {
    const filterToggleButton = $('.filter__movies-heading');
    const filterWrapper = $('.filter__wrapper');
    const filterSvg = $('.filter__svg');

    filterToggleButton.click(() => {
        filterWrapper.toggleClass('display-flex');
        filterSvg.toggleClass('filter__svg-rotate');
    });

    const fromYear = $('#fromYear');
    const toYear = $('#toYear');
    const rating = $('input[name="top"]');
    const articles = $('.content__article');

    fromYear.change(function () {
        const articles = $('.content__article');

        articles.each(function () {
            if (filterArticles($('.year', $(this)).text(), +$('.rating', $(this)).text())) {
                $(this).addClass('display-none');
            } else {
                $(this).removeClass('display-none');
            }
        });
    });

    toYear.change(function () {
        const articles = $('.content__article');

        articles.each(function () {
            if (filterArticles($('.year', $(this)).text(), +$('.rating', $(this)).text())) {
                $(this).addClass('display-none');
            } else {
                $(this).removeClass('display-none');
            }
        });
    });

    rating.change(function () {
        const articles = $('.content__article');

        articles.each(function () {
            if (filterArticles($('.year', $(this)).text(), +$('.rating', $(this)).text())) {
                $(this).addClass('display-none');
            } else {
                $(this).removeClass('display-none');
            }
        });
    });
});

function filterArticles(year, rating) {
    let fromYear = $('#fromYear').val();
    let toYear = $('#toYear').val();
    let ratingFilter = +$('input[name="top"]:checked').val();

    if (fromYear < 1970 || fromYear > 2050 || !fromYear) {
        fromYear = 0;
    }

    if (toYear < 1970 || toYear > 2050 || !toYear) {
        toYear = 0;
    }

    if (((year >= fromYear && fromYear !== 0) || fromYear === 0)
        && ((year <= toYear && toYear !== 0) || toYear === 0)
        && (ratingFilter > 0 && rating < ratingFilter || ratingFilter === 0)) {
        return false;
    }

    return true;
}
