function Slider1__init() {
    $('.slider-1 .owl-carousel').owlCarousel({
        loop:true,
        margin:100,
        nav:true,
        center:true,
        responsive:{
            0:{
                items:4
            }
        }
    });
};
$(function () {
    Slider1__init();
});