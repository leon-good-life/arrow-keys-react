'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ArrowKeysReact = {};

ArrowKeysReact._config = {};

ArrowKeysReact.config = function (config) {
  var options = ['right', 'left', 'up', 'down'];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var option = _step.value;

      if (config.hasOwnProperty(option)) {
        ArrowKeysReact._config[option] = config[option];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

ArrowKeysReact.events = {
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 37) {
      if (ArrowKeysReact._config.hasOwnProperty('left')) {
        ArrowKeysReact._config.left();
      }
    } else if (e.keyCode === 39) {
      if (ArrowKeysReact._config.hasOwnProperty('right')) {
        ArrowKeysReact._config.right();
      }
    } else if (e.keyCode === 38) {
      if (ArrowKeysReact._config.hasOwnProperty('up')) {
        ArrowKeysReact._config.up();
      }
    } else if (e.keyCode === 40) {
      if (ArrowKeysReact._config.hasOwnProperty('down')) {
        ArrowKeysReact._config.down();
      }
    }
  }
};

exports.default = ArrowKeysReact;