(function ($) {
  'use strict';

  $.Ninja.Dialog = function (element, options) {
    var dialog = this;

    if ($.isPlainObject(element)) {
      options = element;
    } else {
      dialog.$element = $(element);
    }

    if (options && 'html' in options) {
      dialog.$html = $('<span>', {
        html: options.html
      });
    } else {
      $.ninja.error('Dialog must include JavaScipt html option.');
    }

    dialog.$dialog = $('<span class="ninja-dialog">').append(dialog.$html);

    dialog.$screen = $('<div class="ninja-screen">').on('click.ninja', function (event) {
      event.stopImmediatePropagation();

      dialog.$dialog.detach();

      dialog.$screen.detach();
    });

    if (dialog.$element) {
      dialog.$element.on('click', function () {
        dialog.attach();
      });
    }
  };

  $.Ninja.Dialog.prototype.attach = function () {
    var dialog = this;

    dialog.$window = $(window);

    dialog.windowHeight = dialog.$window.height();
    dialog.windowWidth = dialog.$window.width();

    dialog.viewport = {
      left: dialog.$window.scrollLeft(),
      top: dialog.$window.scrollTop()
    };

    $(document.body).append(dialog.$screen, dialog.$dialog);

    dialog.height = dialog.$dialog.outerHeight();
    dialog.width = dialog.$dialog.outerWidth();

    if (dialog.height > dialog.windowHeight) {
      dialog.$dialog.css({
        top: dialog.viewport.top
      });
    } else {
      dialog.$dialog.css({
        top: Math.round(dialog.viewport.top + ((dialog.windowHeight / 2) - (dialog.height / 2)))
      });
    }

    if (dialog.width > dialog.windowWidth) {
      dialog.$dialog.css({
        left: dialog.viewport.left
      });
    } else {
      dialog.$dialog.css({
        left: Math.round(dialog.viewport.left + ((dialog.windowWidth / 2) - (dialog.width / 2)))
      });
    }
  };

  $.ninja.dialog = function (element, options) {
    $.extend(new $.Ninja(element, options), new $.Ninja.Dialog(element, options));
  };
}(jQuery));
