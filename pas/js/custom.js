$(function () {

    var s_time = 1000,
        s2_time = 3000;

    $('.left_btn').on('click', function () {
        var banner_li = $('.banner_box').find('li'),
            banner_li_width = banner_li.width();
        banner_li.first().stop().animate({
            marginLeft: banner_li_width
        }, s_time, function () {
            banner_li.css({
                marginLeft: 0
            }).last().prependTo('.banner_box');
        });
    });
    $('.right_btn').on('click', function () {
        var banner_li = $('.banner_box').find('li'),
            banner_li_width = banner_li.width();
        banner_li.first().stop().animate({
            marginLeft: -banner_li_width
        }, s_time, function () {
            banner_li.css({
                marginLeft: 0
            }).first().appendTo('.banner_box');
        });
    });

    var timer;
    // 일정한 시간간격을 두고 움직이는기능 : setInterval
    function startBtn() {
        timer = setInterval('$(".right_btn").click()', s2_time)
    };
    startBtn();
    // setIntervel을 없애는기능
    function stopBtn() {
        clearInterval(timer)
    };

    $('.slide').on({
        'mouseover': stopBtn,
        'mouseout': startBtn
    });
    $('#tabs').tabs();


});