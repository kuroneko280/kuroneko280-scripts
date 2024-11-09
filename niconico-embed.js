// niconico-embed.js
$('.niconico').click(function() {
    var videoURL = $(this).attr('data-video');
    var iframe = '<iframe src="' + videoURL + '" width="800" height="480" frameborder="0" allowfullscreen></iframe>';
    $(this).html(iframe); // サムネイルをiframeに置き換える
});
