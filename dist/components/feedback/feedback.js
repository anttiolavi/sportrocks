$(document).ready(function() {
  var feedbackForm = $('.feedback-form'),
    trigger = feedbackForm.find('.file-attachment__trigger'),
    fakeInput = feedbackForm.find('.file-attachment__fake');

    trigger.change(function() {
      if (trigger.val() == '') return;

      var path = $(this).val().split('\\'),
        filename = path[path.length - 1];

      fakeInput.val(filename);
    });
});