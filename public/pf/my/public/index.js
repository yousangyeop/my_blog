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

function Slick__init() {
    $('.slider-div').slick({
        slide: 'div', //슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, //무한 반복 옵션	 
        slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: true, // 세로 방향 슬라이드 옵션
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
        dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
        draggable: true, //드래그 가능 여부 
        verticalSwiping: true
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
    Slick__init();
    popup__view();
});