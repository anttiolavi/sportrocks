$(document).ready(function() {
  var header = $('.header'),
    menuToggle = header.find('.menu-toggle__icon'),
    navigation = header.find('.navigation');

  menuToggle.on('click', function(e) {
    navigation.toggleClass('navigation--active');
  });
});
