$(document).ready(function() {
  var signInModal = $('.modal__container--signin'),
    modalShadow = $('.modal-shadow'),
    signInClose = $('.signin-close');

  // Close sign in modal
  signInClose.on('click', function(e) {
    signInModal.removeClass('modal__container--active');
    modalShadow.removeClass('modal-shadow--active');
  });
});
