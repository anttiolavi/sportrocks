$(document).ready(function() {
  var resultListItem = $('.info-list__item');

  resultListItem.on('click', function(e) {
    $(this).toggleClass('info-list__item--active');
  });
});
