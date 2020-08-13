function fullPage() {

    $(document).ready(function () {
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5']
        });
    });

}
$(function () {
    fullPage();
  });