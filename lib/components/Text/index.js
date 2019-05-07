"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Text;
exports.getCss = exports.getBaseCss = exports.presets = exports.htmlTags = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _yorkCore = require("@qlean/york-core");

var _styles = require("../../utils/styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var htmlTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span'];
exports.htmlTags = htmlTags;
var presets = {
  ph1: {
    fontSize: 70,
    lineHeight: 75,
    fontWeight: 700
  },
  ph2: {
    fontSize: 60,
    lineHeight: 65,
    fontWeight: 700
  },
  ph3: {
    fontSize: 50,
    lineHeight: 55,
    fontWeight: 700
  },
  h1: {
    fontSize: 40,
    lineHeight: 45,
    fontWeight: 700
  },
  h2: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 700
  },
  h3: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 700
  },
  h4: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 700
  },
  h5: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 700
  },
  text1: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 500
  },
  text2: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 500
  },
  link: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  caption1: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500
  },
  caption2: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 500
  }
};
exports.presets = presets;

var getBaseCss = function getBaseCss(_ref) {
  var color = _ref.color,
      fontWeight = _ref.fontWeight,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight,
      textAlign = _ref.textAlign,
      fontStyle = _ref.fontStyle,
      letterSpacing = _ref.letterSpacing,
      textTransform = _ref.textTransform,
      textDecoration = _ref.textDecoration;
  return "\n  color: ".concat(color === 'inherit' ? 'inherit' : _yorkCore.colors[color], ";\n  font-weight: ").concat(fontWeight, ";\n  font-size: ").concat(fontSize, "px;\n  line-height: ").concat(lineHeight, "px;\n  ").concat(textAlign ? "text-align: ".concat(textAlign) : '', ";\n  ").concat(fontStyle ? "font-style: ".concat(fontStyle) : '', ";\n  ").concat(letterSpacing ? "letter-spacing: ".concat(letterSpacing, "px") : '', ";\n  ").concat(textTransform ? "text-transform: ".concat(textTransform) : '', ";\n  ").concat(textDecoration ? "text-decoration: ".concat(textDecoration) : '', ";\n");
};

exports.getBaseCss = getBaseCss;
var defaultProps = {
  preset: 'text2',
  color: 'coal'
};

var getCss = function getCss(initialProps) {
  var props = _objectSpread({}, defaultProps, initialProps);

  var _mergeStyleProps = (0, _styles.mergeStyleProps)([(0, _styles.unwrapResponsivePreset)('preset', presets, props), (0, _styles.unwrapResponsiveProps)(['color', 'fontWeight', 'fontSize', 'textAlign', 'lineHeight', 'textDecoration', 'textTransform'], props)]),
      mobileProps = _mergeStyleProps.mobileProps,
      baseProps = _mergeStyleProps.baseProps,
      wideProps = _mergeStyleProps.wideProps;

  return "\n    font-family: \"Museo Sans\";\n    margin: 0;\n    ".concat(_styles.media.mobile(getBaseCss(mobileProps)), "\n    ").concat(_styles.media.base(getBaseCss(baseProps)), "\n    ").concat(_styles.media.wide(getBaseCss(wideProps)), "\n  ");
};

exports.getCss = getCss;

var StyledText = _styledComponents["default"].span.withConfig({
  displayName: "Text__StyledText",
  componentId: "sc-1dwos26-0"
})(["", ""], getCss);

var components = R.pipe(R.map(function (tag) {
  return [tag, StyledText.withComponent(tag)];
}), R.fromPairs)(htmlTags);

function Text(_ref2) {
  var htmlTag = _ref2.htmlTag,
      rest = _objectWithoutProperties(_ref2, ["htmlTag"]);

  var StyledTextComponent = components[htmlTag];
  return _react["default"].createElement(StyledTextComponent, rest);
}

Text.propTypes = _objectSpread({
  htmlTag: _propTypes["default"].oneOf(htmlTags)
}, (0, _styles.getResponsivePropTypes)({
  preset: _propTypes["default"].oneOf(Object.keys(presets)),
  color: _propTypes["default"].oneOf([].concat(_toConsumableArray(Object.keys(_yorkCore.colors)), ['inherit'])),
  fontWeight: _propTypes["default"].oneOf([500, 700, 900]),
  textAlign: _propTypes["default"].oneOf(['left', 'center', 'right']),
  lineHeight: _propTypes["default"].number,
  fontSize: _propTypes["default"].number
}));
Text.defaultProps = {
  htmlTag: 'span'
};