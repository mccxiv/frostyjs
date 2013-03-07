$(document).ready(function() {
    $('.toggle').on('click', function(e) {
        var $target = $(e.currentTarget);
        var $el = $($target.attr('data-toggle'));
        $el.toggleClass('hidden');
        $el.prev('.lines').toggleClass('hidden');
    });
});