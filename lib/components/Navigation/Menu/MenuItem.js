"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _yorkCore = require("@qlean/york-core");

var _styles = require("../../../utils/styles");

var _ui = require("../../ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getCss = function getCss(_ref) {
  var color = _ref.color,
      hoverColor = _ref.hoverColor,
      isAuthButton = _ref.isAuthButton;
  return "\n  display: block;\n  text-transform: uppercase;\n  transition: none;\n  text-align: left;\n  white-space: nowrap;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: ".concat(_yorkCore.colors[color] || _yorkCore.colors.coal, ";\n  padding: ").concat((0, _styles.g)(2), "px;\n  width: 100%;\n  line-height: 20px;\n\n  &:hover {\n    color: ").concat(_yorkCore.colors[hoverColor] || _yorkCore.colors.grey, ";\n  }\n\n  ").concat(_styles.media.mobile("\n    padding: ".concat((0, _styles.g)(2), "px 0;\n    color: ").concat(_yorkCore.colors.coal, ";\n\n    ").concat(isAuthButton ? "\n      margin-top: ".concat((0, _styles.g)(6), "px;\n      margin-bottom: ").concat((0, _styles.g)(8), "px;\n      color: ").concat(_yorkCore.colors.grey, ";\n    ") : '', "\n  ")), "\n");
};

var StyledText = (0, _styledComponents["default"])(_ui.Text).withConfig({
  displayName: "MenuItem__StyledText",
  componentId: "sc-11axj4o-0"
})(["", ""], getCss);
var StyledButton = (0, _styledComponents["default"])(_ui.InlineButton).withConfig({
  displayName: "MenuItem__StyledButton",
  componentId: "sc-11axj4o-1"
})(["", ""], getCss);

var MenuItem = function MenuItem(_ref2) {
  var LinkComponent = _ref2.LinkComponent,
      href = _ref2.href,
      onClick = _ref2.onClick,
      toggleMenu = _ref2.toggleMenu,
      color = _ref2.color,
      hoverColor = _ref2.hoverColor,
      children = _ref2.children,
      isAuthButton = _ref2.isAuthButton,
      name = _ref2.name,
      rest = _objectWithoutProperties(_ref2, ["LinkComponent", "href", "onClick", "toggleMenu", "color", "hoverColor", "children", "isAuthButton", "name"]);

  if (LinkComponent) {
    return _react["default"].createElement(LinkComponent, {
      to: href,
      onClick: toggleMenu,
      name: name
    }, _react["default"].createElement(StyledText, _extends({
      preset: "link",
      color: color,
      hoverColor: hoverColor
    }, rest), children));
  }

  if (onClick) {
    return _react["default"].createElement(StyledButton, _extends({
      textPreset: "link",
      color: color,
      hoverColor: hoverColor,
      onClick: onClick,
      isAuthButton: isAuthButton,
      name: name,
      isDisabled: false
    }, rest), children);
  }

  return !href ? _react["default"].createElement(StyledText, _extends({
    preset: "link",
    color: color,
    hoverColor: hoverColor,
    name: name
  }, rest), children) : _react["default"].createElement("a", {
    href: href,
    name: name
  }, _react["default"].createElement(StyledText, _extends({
    preset: "link",
    color: color,
    hoverColor: hoverColor
  }, rest), children));
};

MenuItem.propTypes = {
  LinkComponent: _propTypes["default"].func,
  toggleMenu: _propTypes["default"].func,
  href: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  color: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)),
  hoverColor: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)),
  children: _propTypes["default"].node.isRequired,
  isAuthButton: _propTypes["default"].bool
};
var _default = MenuItem;
exports["default"] = _default;