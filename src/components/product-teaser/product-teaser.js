$(document).ready(function() {
  var resultListItem = $('.product-list__item');

  resultListItem.on('click', function(e) {
    $(this).toggleClass('product-list__item--active');
  });
});
