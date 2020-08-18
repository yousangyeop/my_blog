function FullPage__init() {
    $('#fullpage').fullpage({
        verticalCentered:false,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        afterLoad:function(origin, destination, direction) {
            $('html').attr('data-fullpage-index', destination.index);
        }
    });
}

$(function () {
    FullPage__init();
});