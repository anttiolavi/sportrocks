$(document).ready(function() {
  var resultListItem = $('.result-list__item');

  resultListItem.on('click', function(e) {
    $(this).toggleClass('result-list__item--active');
  });
});
