function slide() {
    $('.sbs-slider > .side-bars > div').click(function () {
  
      var $clickedBtn = $(this);
      var $slider = $clickedBtn.closest('.sbs-slider');
  
  
      var isLeft = $clickedBtn.index() == 0;
  
      var $currnet = $slider.find('.slides > .active');
      var $dots = $slider.find('> .btn-slide > div');
      var $activeDot = $slider.find('> .btn-slide > .active');
      var $post = null;
  
      if (isLeft) {
        $post = $currnet.prev();
      } else {
        $post = $currnet.next();
      }
  
      if ($post.length == 0) {
        if (isLeft) {
          $post = $slider.find('.slides > div:last-child');
        } else {
          $post = $slider.find('.slides > div:first-child');
        }
      }
  
      var $postIndex = $post.index();
      var $dotIndex = $dots.eq($postIndex);
  
      $activeDot.removeClass('active');
      $currnet.removeClass('active');
      $dotIndex.addClass('active');
      $post.addClass('active');
    });
  }
  
  
  function dotSlide(){
    var $this = $(this);
    var $thisIndex = $this.index();
    var $slider = $this.closest('.sbs-slider');
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
      $('.sbs-slider > .side-bars > div:last-child').click()
    }, 2000)
  }
  
  
  
  $(function () {
    slide();
    dotSlide__init();
    setInt__init();
  });
  