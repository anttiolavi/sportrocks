$(document).ready(function() {
  var registerModal = $('.modal__container--register'),
    modalShadow = $('.modal-shadow'),
    registerClose = $('.register-close'),
    signInModal = $('.modal__container--signin');

  // Close sign in modal
  registerClose.on('click', function(e) {
    registerModal.removeClass('modal__container--active');
    modalShadow.removeClass('modal-shadow--active');
  });

  $(document).keyup(function(event) {
    if (event.keyCode == 27) {
      if (registerModal.hasClass('modal__container--active')) {
        if (modalShadow.hasClass('modal-shadow--active')) {
          modalShadow.removeClass('modal-shadow--active');
        }

        registerModal.removeClass('modal__container--active');
      } else if (signInModal.hasClass('modal__container--active')) {
        if (modalShadow.hasClass('modal-shadow--active')) {
          modalShadow.removeClass('modal-shadow--active');
        }

        signInModal.removeClass('modal__container--active');
      }
    }
  });

  $(document).on('click', function(e) {
    var closestRegister = $(e.target).closest('.modal__container--register'),
      closestSignin = $(e.target).closest('.modal__container--signin');

    if (!closestSignin.length && !closestRegister.length) {
      if (registerModal.hasClass('modal__container--active')) {
        registerModal.removeClass('modal__container--active');
      } else if ($('.modal__container--signin').hasClass('modal__container--active')) {
        $('.modal__container--signin').removeClass('modal__container--active');
      }

      if (modalShadow.hasClass('modal-shadow--active')) {
        modalShadow.removeClass('modal-shadow--active');
      }
    }
  });
});
