function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');
    var $mobileSideBar = $(".mobile-side-bar");
    var $mobileSideBarBg = $(".mobile-side-bar-bg");
    var $html = $("html");

    if ($btn.hasClass('active')) {
        // 모바일 사이드바 끄기
        $btn.removeClass('active');
        $mobileSideBar.removeClass('active');
        $mobileSideBarBg.removeClass('active');
        $html.removeClass("mobile-side-bar-actived");
    } else {
        $btn.addClass('active');
        // 모바일 사이드바 켜기
        $mobileSideBar.addClass('active');
        $mobileSideBarBg.addClass('active');
        $html.addClass("mobile-side-bar-actived");
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar, .mobile-side-bar-bg').click(MobileSideBar__toggle);
    $(".mobile-side-bar .menu-box-1 ul > li").click(function (e) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        e.stopPropagation();
    });
}


$(function () {
    MobileSideBar__init();

    $("btn-toggle-mobile-side-bar").click();
    $(".mobile-side-bar .menu-box-1 > ul > li:last-child").click();
});

$(function(){

});


function slider() {

    var $clickedBtn = $(this);
    var $slider = $clickedBtn.parent().parent();
    var $current = $slider.find('>.slides>div.active');
    var $post;
    var isLeft = $clickedBtn.index() == 0;

    if (isLeft) {
        $post = $current.prev();
        if ($post.length == 0) {
            $post = $slider.find('>.slides > div:last-child');
        }
    } else {
        $post = $current.next();
        if ($post.length == 0) {
            $post = $slider.find('>.slides > div:first-child');
        }
    }
    $current.removeClass('active');
    $post.addClass('active');

}

function slider__init() {
    $('.slider > .side-bars > div').click(slider);
}

$(function(){
    slider__init()
});

function slideBar__move(){
function a (){
    $('.slider >.side-bars > div:last-child').click();
}
setInterval(a,5000);
}
$(function(){
    slideBar__move();
});

