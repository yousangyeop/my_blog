function Popup1__init() {
    $('.btn-toggle').click(function() {
      $('html').addClass('popup1-actived');
    });
    
    $('.popup1').click(function() {
      $('html').removeClass('popup1-actived');
    });
    
    $('.popup1 > .box').click(function() {
      return false;
    });
  }
  
  $(function() {
    Popup1__init();
  });