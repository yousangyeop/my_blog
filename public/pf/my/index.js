console.clear();

function Meteor__init() {
    $(".meteor").each(function (index, el) {
        var $el = $(el);
        var delay = parseInt($el.attr("data-meteor-delay"));
        var duration = parseInt($el.attr("data-meteor-duration")) / 1000;
        var x = parseInt($el.attr("data-meteor-x"));
        
        // 반복실행v2
        var fallStar = function () {
            $el.addClass("active");
            TweenLite.to($el.find(" > div").get(0), duration, { x: x });
            setTimeout(function () {
                $el.removeClass("active");
                TweenLite.to($el.find(" > div").get(0), 1, { x: 0 });
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
        setTimeout(function(){
            fallStar();
            setInterval(fallStar, duration * 1000 + delay);
        }, delay);
    });
}

$(function () {
    Meteor__init();
});
