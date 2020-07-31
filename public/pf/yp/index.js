
  function dotSlide(){
    var $this = $(this);
    var $thisIndex = $this.index();
    var $slider = $this.closest('.slider');
    var $slides = $slider.find('> .slides > li');
    var $activeDot = $slider.find('> .slide-btn > .active');
    var $activeSlide = $slider.find('> .slides > .active');
    var $slideIndex = $slides.eq($thisIndex);
    
    
  
    $activeDot.removeClass('active');
    $activeSlide.removeClass('active');
  
    $this.addClass('active');
    $slideIndex.addClass('active');
  }
  
  
  function dotSlide__init(){
    $('.slide-btn > li').click(dotSlide);
  }
  
  // function setInt__init(){
  //   setInterval(function(){
  //     $('.slider > .slide-btn > li:last-child').click()
  //   }, 2000)
  // }
  function btnSlide(){
    var $this = $(this);
    var $thisIndex = $this.index();
    var $slider = $this.closest('.slide');
    var $slides = $slider.find(' > .slides > li');
    var $activeDot = $slider.find(' > .btn-slide > .active');
    var $activeSlide = $slider.find(' > .slides > .active');
    var $slideIndex = $slides.eq($thisIndex);
    
    
  
    $activeDot.removeClass('active');
    $activeSlide.removeClass('active');
  
    $this.addClass('active');
    $slideIndex.addClass('active');
  }
  
  
  function btnSlide__init(){
    $('.btn-slide > li').click(btnSlide);
  }
  
  
  $(function () {
    dotSlide__init();
    btnSlide__init();
  });
  