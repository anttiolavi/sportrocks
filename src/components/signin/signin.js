$(document).ready(function() {
  var signInModal = $('.modal__container--signin'),
    signInMenuLink = $('.navigation').find('.menu__link--signin'),
    modalShadow = $('.modal-shadow'),
    signInClose = $('.signin-close');

  // Open sign in modal if not already opened
  signInMenuLink.on('click', function(e) {
    e = e || widnow.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
    e.stopPropagation();

    if (!signInModal.hasClass('modal__container--active')) {
      if (!modalShadow.hasClass('modal-shadow--active')) {
        modalShadow.addClass('modal-shadow--active');
      }

      signInModal.css('top', window.scrollY + 10 + 'px')
      signInModal.addClass('modal__container--active');
    }
  });

  // Close sign in modal
  signInClose.on('click', function(e) {
    signInModal.removeClass('modal__container--active');
    modalShadow.removeClass('modal-shadow--active');
  });
});
