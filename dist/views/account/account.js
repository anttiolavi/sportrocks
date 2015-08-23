$(document).ready(function() {
	var registerModal = $('.modal__container--register'),
		registerButton = $('.start-here__button'),
		modalShadow = $('.modal-shadow'),
		registerClose = $('.register-close');

	// Open sign in modal if not already opened
	registerButton.on('click', function(e) {
		if (!registerModal.hasClass('modal__container--active')) {
			if (!modalShadow.hasClass('modal-shadow--active')) {
				modalShadow.addClass('modal-shadow--active');
			}

			registerModal.addClass('modal__container--active');
		}
	});

	// Close sign in modal
	registerClose.on('click', function(e) {
		registerModal.removeClass('modal__container--active');
		modalShadow.removeClass('modal-shadow--active');
	});
});