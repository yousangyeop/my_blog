function slide() {
  $(".slider > .slide-bars > div").click(function () {
    var $clickedBtn = $(this);
    var $slider = $clickedBtn.closest(".slider");
    var $current = $slider.find("> .slides > .active");
    var $post = $current.next();

    if ($post.length == 0) {
      $post = $slider.find(".slides > div:first-child");
    }

    $current.removeClass("active");
    $post.addClass("active");
  });
}

$(function (){
  slide();
});