"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderMobileMenuToggler;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _yorkCore = require("@qlean/york-core");

var _styles = require("../../../utils/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledToggler = _styledComponents["default"].div.withConfig({
  displayName: "Toggler__StyledToggler",
  componentId: "sc-8zrswg-0"
})(["transition:all linear 0.2s;position:relative;cursor:pointer;height:", "px;width:", "px;z-index:1;&:before,&:after{transition:all ease 0.2s;position:absolute;margin-left:-13px;content:'';width:24px;height:3px;border-radius:1.5px;left:50%;top:50%;background-color:", ";}&:before{margin-top:-7px;}&:after{margin-top:3px;}", ""], (0, _styles.g)(4), (0, _styles.g)(4), function (_ref) {
  var color = _ref.color;
  return _yorkCore.colors[color] || _yorkCore.colors.black;
}, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive ? "\n    &:before, &:after {\n      margin-top: -2px;\n    }\n\n    &:before {\n      transform: rotate(45deg);\n    }\n\n    &:after {\n      transform: rotate(-45deg);\n    }\n  " : '';
});

function HeaderMobileMenuToggler(props) {
  var onClick = props.onClick,
      isActive = props.isActive,
      color = props.color,
      rest = _objectWithoutProperties(props, ["onClick", "isActive", "color"]);

  return _react["default"].createElement(StyledToggler, _extends({
    isActive: isActive,
    onClick: onClick,
    color: color
  }, rest));
}

HeaderMobileMenuToggler.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  isActive: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)).isRequired
};