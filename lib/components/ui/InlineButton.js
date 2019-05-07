"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _yorkCore = require("@qlean/york-core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../../utils/styles");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledInlineButton = _styledComponents["default"].button.withConfig({
  displayName: "InlineButton__StyledInlineButton",
  componentId: "sc-9aiq6r-0"
})(["font-family:'Museo Sans';transition:", ";appearance:none !important;outline:none !important;display:inline;border:none;margin:0;padding:0;background-color:transparent;color:", ";cursor:pointer;&:hover{color:#23b059;}", ""], _styles.transitions["short"], function (_ref) {
  var color = _ref.color;
  return _yorkCore.colors[color];
}, function (_ref2) {
  var isDisabled = _ref2.isDisabled,
      textPreset = _ref2.textPreset;
  return "\n    font-size: ".concat(_.textPresets[textPreset].fontSize, "px;\n    font-weight: ").concat(_.textPresets[textPreset].fontWeight, ";\n    line-height: ").concat(_.textPresets[textPreset].lineHeight, "px;\n    ").concat(isDisabled && "\n      color: ".concat(_yorkCore.colors.silver, ";\n      cursor: default;\n    "), ";\n  ");
});

function InlineButton(props) {
  return _react["default"].createElement(StyledInlineButton, _extends({
    disabled: props.isDisabled
  }, props));
}

InlineButton.propTypes = {
  textPreset: _propTypes["default"].oneOf(Object.keys(_.textPresets)),
  color: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)),
  isDisabled: _propTypes["default"].bool.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired
};
InlineButton.defaultProps = {
  textPreset: 'text2',
  color: 'green'
};
var _default = InlineButton;
exports["default"] = _default;