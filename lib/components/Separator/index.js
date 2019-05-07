"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getCss = exports.getBaseCss = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _styles = require("../../utils/styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sizes = {
  0: 0,
  1: (0, _styles.g)(1),
  2: (0, _styles.g)(2),
  3: (0, _styles.g)(3),
  4: (0, _styles.g)(4),
  6: (0, _styles.g)(6),
  8: (0, _styles.g)(8),
  12: (0, _styles.g)(12),
  16: (0, _styles.g)(16),
  20: (0, _styles.g)(20),
  24: (0, _styles.g)(24)
};

var sizesPropTypes = _propTypes["default"].oneOf(R.map(Number, R.keys(sizes)));

var defaultProps = {
  height: 0,
  width: 0
};

var getBaseCss = function getBaseCss(_ref) {
  var height = _ref.height,
      width = _ref.width;
  return "\n  height: ".concat(sizes[height], "px;\n  width: ").concat(sizes[width], "px;\n");
};

exports.getBaseCss = getBaseCss;

var getCss = function getCss(initialProps) {
  var props = _objectSpread({}, defaultProps, initialProps);

  var _unwrapResponsiveProp = (0, _styles.unwrapResponsiveProps)(['height', 'width'], props),
      mobileProps = _unwrapResponsiveProp.mobileProps,
      baseProps = _unwrapResponsiveProp.baseProps,
      wideProps = _unwrapResponsiveProp.wideProps;

  return "\n    flex-shrink: 0;\n    ".concat(_styles.media.mobile(getBaseCss(mobileProps)), "\n    ").concat(_styles.media.base(getBaseCss(baseProps)), "\n    ").concat(_styles.media.wide(getBaseCss(wideProps)), "\n  ");
};

exports.getCss = getCss;

var Separator = _styledComponents["default"].div.withConfig({
  displayName: "Separator",
  componentId: "sc-1fiw949-0"
})(["", ""], getCss);

Separator.propTypes = _objectSpread({
  height: sizesPropTypes,
  width: sizesPropTypes
}, (0, _styles.getResponsivePropTypes)({
  height: sizesPropTypes,
  width: sizesPropTypes
}));
var _default = Separator;
exports["default"] = _default;