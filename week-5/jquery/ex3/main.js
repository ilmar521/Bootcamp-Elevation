$(document).ready(function () {
    $('body').append($('<div></div>').addClass('box'))
    $('body').append($('<div></div>').addClass('box'))

    $('.box').attr('style', 'border-radius: 5px; box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);');
    $('.box').mouseenter(function () {
        $(this).removeClass('red');
    });
    $('.box').mouseleave(function () {
        $(this).addClass('red');
    });
})