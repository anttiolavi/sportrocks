$(document).ready(function() {
  var resultListItem = $('.product-teaser-list__item');

  resultListItem.on('click', function(e) {
    $(this).toggleClass('product-teaser-list__item--active');
  });
});
