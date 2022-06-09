/*jslint plusplus: true */
/*global $*/
$(document).ready(function () {
    "use strict";
    var controll = $('.slider .fa'),
        slide = $('.slider ul li'),
        open = 0,
        i = 11;
    
    controll.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    slide.each(function () {
        $(this).css('z-index', -$(this).index());
    });
    controll.on('click', function () {
        if ($(this).is(':last-of-type')) {
            i++;
            slide.eq(open).addClass('open').css('z-index', i);
            open++;
            if (slide.last().hasClass('open')) { $(this).hide(); } else { $(this).siblings('.fa').show(); }
        }
        if ($(this).is(':first-of-type') && slide.first().hasClass('open')) {
            i++;
            open--;
            slide.eq(open).removeClass('open').css('z-index', i);
            if (!slide.first().hasClass('open')) { $(this).hide(); } else { $(this).siblings('.fa').show(); }
        }
    });
    controll.last().click();
});

// https://codepen.io/anon/pen/YVeyVZ
// Em An
// 5-2017