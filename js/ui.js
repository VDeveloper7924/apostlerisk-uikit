window.onload = function() {
  var srcCd = '';
  jQuery('.uikit__source').append('<button type="button" title="Expand/collapse" class="uikit__source-expand"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><line x1="15.5" y1="0.5" x2="0.5" y2="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="15.5" y1="15.5" x2="0.5" y2="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><polyline points="10.5 6 8 3.5 5.5 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline><polyline points="10.5 10 8 12.5 5.5 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline></g></svg></button>');
  jQuery('.uikit__source').append('<button type="button" title="Copy source code" class="uikit__source-copy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><line x1="10.5" y1="1.5" x2="5.5" y2="14.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><polyline points="3.5 4.5 0.5 7.5 3.5 10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline><polyline points="12.5 4.5 15.5 7.5 12.5 10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline></svg></button>');
  jQuery('.uikit__example').each(function() {
    srcCd = $(this).html();
    jQuery(this).next('.uikit__source').find('code').text(srcCd);
  });
  jQuery('.uikit__source-expand').on('click', function() {
    $(this).parent().toggleClass('active');
  });
  jQuery('.uikit__source-copy').on('click', function() {
    var rng = document.createRange();
    var slctn = window.getSelection();
    var elmnt = $(this).siblings('code')[0];
    rng.selectNodeContents(elmnt);
    slctn.removeAllRanges();
    slctn.addRange(rng);
    document.execCommand('copy');
    alert('Source code copied to clipboard.');
  });
  jQuery('[data-section-open]').on('click', function(evnt) {
    var trgt = jQuery(jQuery(this).data('section-open'));
    jQuery(this).addClass('active').siblings().removeClass('active');
    trgt.addClass('active').siblings().removeClass('active');
  });
}