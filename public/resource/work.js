console.clear();

function slide() {
    $('.sbs-slider .side-bars > div').click(function () {
        var $this = $(this);
        var $silder = $this.parent().parent();
        var $current = $silder.find('> .slides > div.active');
        var $post;
        var $isLeft = $this.index() == 0;
        if ($isLeft) {

            $post = $current.prev();
            if ($post.length == 0) {
                $post = $silder.find('>.slides > div:last-child')
            }
        } else {
            $post = $current.next();
            if ($post.length == 0) {
                $post = $silder.find('>.slides > div:first-child')

            }
        }
        $current.removeClass('active');
        $post.addClass('active');


    });
}
$(function () {
    slide();
});