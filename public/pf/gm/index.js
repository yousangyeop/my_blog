function MySlider1__init() {
    $('.my-slider-1 .owl-carousel').owlCarousel({
      responsive:{
        0:{
          items:1
        }
      },
      loop:true,
      dots:false,
      nav:true,
      navText: ['좌', '우']
    });
};
  
$(function(){
  MySlider1__init();
})