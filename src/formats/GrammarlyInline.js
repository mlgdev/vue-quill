'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _quill = require('quill');

var _quill2 = _interopRequireDefault(_quill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = _quill2.default.import('blots/inline');

var GrammarlyInline = function (_Inline) {
  _inherits(GrammarlyInline, _Inline);

  function GrammarlyInline() {
    _classCallCheck(this, GrammarlyInline);

    return _possibleConstructorReturn(this, (GrammarlyInline.__proto__ || Object.getPrototypeOf(GrammarlyInline)).apply(this, arguments));
  }

  return GrammarlyInline;
}(Inline);

GrammarlyInline.tagName = 'G';
GrammarlyInline.blotName = 'grammarly-inline';
GrammarlyInline.className = 'gr_';

exports.default = GrammarlyInline;