$(document).ready(function () {
    const loadMore = $('.load-more__button');

    let data = 1;

    loadMore.click(() => {
        $.ajax({
            "type": 'POST',
            "url": 'ajax.php',
            "data": data,
            "success": function (msg) {
                $('.content__list').append(msg);
            }
        });
    });
});