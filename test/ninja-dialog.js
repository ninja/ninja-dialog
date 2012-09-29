(function ($) {
  'use strict';

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [dialog])
      equal(actual, expected, [dialog])
      notEqual(actual, expected, [dialog])
      deepEqual(actual, expected, [dialog])
      notDeepEqual(actual, expected, [dialog])
      strictEqual(actual, expected, [dialog])
      notStrictEqual(actual, expected, [dialog])
      raises(block, [expected], [dialog])
  */

  module('constructor', {
    setup: function () {
      this.constructor = $.Ninja.Dialog;
    }
  });

  test('exists', function () {
    ok(this.constructor, 'should exist');
  });

  test('is a function', function () {
    ok($.isFunction(this.constructor), 'should be a function');
  });

  module('instance', {
    setup: function () {
      this.instance = new $.Ninja.Dialog({
        html: ''
      });
    }
  });

  test('is an instance', function () {
    ok(this.instance instanceof $.Ninja.Dialog, 'should be instance of $.Ninja.Dialog');
  });

  test('.$dialog', function () {
    ok(this.instance.$dialog, 'should exist');
    ok(this.instance.$dialog.is('span'), 'should be a span element');
    ok(this.instance.$dialog.hasClass('ninja-dialog'), 'should have dialog class');
  });

  module('JavaScript option', {
    setup: function () {
      this.elements = $('#qunit-fixture').find('.test-option');
    }
  });

  test('is chainable', function () {
    strictEqual(this.elements.ninja('dialog', {
      html: 'Freedom!'
    }), this.elements, 'should be chainable');
  });

  QUnit.done(function () {
    $('#qunit-examples').find('.test-option').ninja('dialog', {
      html: 'Freedom!'
    });
  });

  module('inline-block', {
    setup: function () {
      this.elements = $('#qunit-fixture').find('.test-dialog');
    }
  });

  test('is chainable', function () {
    strictEqual(this.elements.ninja('dialog', {
      html: 'Freedom!'
    }), this.elements, 'should be chainable');
  });

  QUnit.done(function () {
    $('#qunit-examples').find('.test-dialog').ninja('dialog', {
      html: $('#qunit-examples').find('table.ninja').clone(),
      hover: true
    });
  });
}(jQuery));
