// script.js
$('.niconico').click(function() {
    var video = '<iframe src="' + $(this).attr('data-video') + '" frameborder="0" width="800" height="480" allowfullscreen></iframe>';
    $(this).replaceWith(video);
});
