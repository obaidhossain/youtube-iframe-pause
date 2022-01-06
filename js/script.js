jQuery('.uael-video__gallery-iframe,.video-play-again').on("click", function() {
  var iframe = jQuery(this).find('iframe'),
        src = iframe.attr('src'),
        url = src;
        if (src.indexOf('autoplay=0') != -1) {
           url = src.replace('autoplay=0','autoplay=1&rel=0');
        } else {
           url = src.replace('autoplay=1','autoplay=1&rel=0');
        }
  jQuery(this).find('.video-play-again').remove();
  jQuery(this).find('iframe').attr('src',url);
  jQuery('.uael-video__gallery-iframe').not(this).each(function() {
    if(jQuery(this).find('iframe').length != 0) {
      var iframe = jQuery(this).find('iframe'),
        src = iframe.attr('src'),
        thumb = 'https://s-hasib.com/fir/wp-content/uploads/2021/11/play-1.png',
        url = src.split('?')[0],
        url = url+'?autoplay=0&version=3&enablejsapi=1';
        iframe.attr('src',url);
        jQuery(this).append('<div class="video-play-again"></div>');
    }
  });
});
