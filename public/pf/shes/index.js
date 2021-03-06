function slide() {
  $(".slider > .slide-bars > div").click(function () {
    var $clickedBtn = $(this);
    var $slider = $clickedBtn.closest(".slider");
    var $current = $slider.find("> .slides > .active");
    var $dots = $slider.find('> .btn-slide > div');
    var $activeDot = $slider.find('> .btn-slide > active');
    var $post = $current.next();

    if ($post.length == 0) {
      $post = $slider.find(".slides > div:first-child");
    }
    var $postIndex = $post .index();
    var $dotIndex = $dots.eq($postIndex);

    $activeDot.removeClass('active');
    $current.removeClass("active");
    $dotIndex.addClass('active');
    $post.addClass("active");
  });
}

function dotSlide(){
  var $this = $(this);
  var $thisIndex = $this.index();
  var $slider = $this.closest('.slider');
  var $slides = $slider.find('> .slides > div');
  var $activeDot = $slider.find('> .btn-slide > .active');
  var $activeSlide = $slider.find('> .slides > .active');
  var $slideIndex = $slides.eq($thisIndex);
  

  $activeDot.removeClass('active');
  $activeSlide.removeClass('active');

  $this.addClass('active');
  $slideIndex.addClass('active');
}


function dotSlide__init(){
  $('.btn-slide > div').click(dotSlide);
}

function setInt__init(){
  setInterval(function(){
    $('.slider > .slide-bars > div:last-child').click()
  }, 2000)
}

$(function (){
  slide();
  dotSlide__init();
  setInt__init();
});