function Meteor__init() {
    $(".meteor").each(function (index, el) {
        var $el = $(el);
        var delay = parseInt($el.attr("data-meteor-delay"));
        var duration = parseInt($el.attr("data-meteor-duration")) / 1000;
        var x = parseInt($el.attr("data-meteor-x"));

        // 반복실행v2
        var fallStar = function () {
            $el.addClass("active");
            TweenLite.to($el.find(" > div").get(0), duration, {
                x: x
            });
            setTimeout(function () {
                $el.removeClass("active");
                TweenLite.to($el.find(" > div").get(0), 1, {
                    x: 0
                });
            }, duration * 1000 - 1000);
        };

        // 한번만 실행
        // setTimeout(function() {
        //     $el.addClass('active');
        //     TweenLite.to($el.find(' > div').get(0), duration, {x:x});
        // }, delay);

        // 반복실행v1
        // setTimeout(function () {
        //     setInterval(function () {
        //         $el.addClass("active");
        //         TweenLite.to($el.find(" > div").get(0), duration, { x: x });
        //         setTimeout(function () {
        //             $el.removeClass("active");
        //             TweenLite.to($el.find(" > div").get(0), 1, { x: 0 });
        //         }, duration * 1000 - 1000);
        //     }, duration * 1000);
        // }, delay);

        // 반복실행v2
        setTimeout(function () {
            fallStar();
            setInterval(fallStar, duration * 1000 + delay);
        }, delay);
    });
}

$(function () {
    Meteor__init();
});

function FullPage__init() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        afterLoad: function (origin, destination, direction) {
            $('html').attr('data-fullpage-index', destination.index);
        }
    });
}


function Slider__init() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true
    });
}



function select__item() {
    $('.list-box > .item-list > .item').click(function () {
        var $select = $(this);
        var $active = $('.list-box > .item-list').find('> .active');
        var index = $select.index();
        var $text = $('.item-select > div');
        var $textActive = $('.item-select').find('> .active');

        $active.removeClass('active');
        $select.addClass('active');
        $textActive.removeClass('active');
        $text.eq(index).addClass('active');

        console.log(index);
    })
};

$(function () {
    select__item();
})

function popup__view() {
    $('.btn-toggle').click(function () {
        $('.popup1').addClass('active');
    });
    $('.popup1').click(function(){
        $(this).removeClass('active');
    });
    
}

$(function () {
    FullPage__init();
    Slider__init();
    popup__view();
});