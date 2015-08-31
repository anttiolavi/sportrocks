$(document).ready(function() {
  var registerModal = $('.modal__container--register'),
    registerButton = $('.start-here__button'),
    modalShadow = $('.modal-shadow'),
    registerClose = $('.register-close'),
    signInModal = $('.modal__container--signin');

  // Open sign in modal if not already opened
  registerButton.on('click', function(e) {
    e = e || window.event;
    e.stopPropagation();

    if (!registerModal.hasClass('modal__container--active')) {
      if (!modalShadow.hasClass('modal-shadow--active')) {
        modalShadow.addClass('modal-shadow--active');
      }

      registerModal.css('top', window.scrollY + 10 + 'px')
      registerModal.addClass('modal__container--active');
    }
  });

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
      closestSignup = $(e.target).closest('.modal__container--signin');

    if (!closestSignup.length || !closestRegister.length) {
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
