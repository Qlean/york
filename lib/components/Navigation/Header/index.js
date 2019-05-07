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

var _flex = require("../../ui/flex");

var _HeaderLogo = _interopRequireDefault(require("./HeaderLogo"));

var _Toggler = _interopRequireDefault(require("./Toggler"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeaderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Header__StyledHeaderWrapper",
  componentId: "sc-1aeh21j-0"
})(["z-index:1;padding:0 ", "px;", ";"], (0, _styles.g)(6), function (_ref) {
  var isMenuOpened = _ref.isMenuOpened;
  return "\n    ".concat(_styles.media.mobile("\n      background: ".concat(isMenuOpened ? _yorkCore.colors.white : 'none', ";\n    ")), ";\n  ");
});

var StyledHeader = (0, _styledComponents["default"])(_flex.FlexBase).withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1aeh21j-1"
})(["height:", "px;", ";"], (0, _styles.g)(12), function (_ref2) {
  var withBorder = _ref2.withBorder;
  return "\n    ".concat(_styles.media.mobile("\n      border-bottom: 1px solid ".concat(withBorder ? _yorkCore.colors.silver : 'transparent', ";\n    ")), ";\n  ");
});
var StyledToggler = (0, _styledComponents["default"])(_Toggler["default"]).withConfig({
  displayName: "Header__StyledToggler",
  componentId: "sc-1aeh21j-2"
})(["display:none;", ";"], _styles.media.mobile(_templateObject()));

var Header = function Header(_ref3) {
  var isMenuOpened = _ref3.isMenuOpened,
      toggleMenu = _ref3.toggleMenu,
      preset = _ref3.preset,
      presetMobile = _ref3.presetMobile,
      withBorder = _ref3.withBorder;
  return _react["default"].createElement(StyledHeaderWrapper, {
    isMenuOpened: isMenuOpened
  }, _react["default"].createElement(StyledHeader, {
    alignItems: "center",
    justifyContentMobile: "space-between",
    withBorder: withBorder || isMenuOpened
  }, _react["default"].createElement(_HeaderLogo["default"], {
    color: isMenuOpened ? 'black' : _utils.presets[preset].logo,
    colorMobile: isMenuOpened ? 'black' : _utils.presets[presetMobile].logo
  }), _react["default"].createElement(StyledToggler, {
    color: isMenuOpened ? 'black' : _utils.presets[presetMobile].toggler,
    isActive: isMenuOpened,
    onClick: toggleMenu
  })));
};

Header.propTypes = {
  isMenuOpened: _propTypes["default"].bool.isRequired,
  withBorder: _propTypes["default"].bool,
  toggleMenu: _propTypes["default"].func.isRequired,
  preset: _propTypes["default"].oneOf(['lightBackground', 'darkBackground']),
  presetMobile: _propTypes["default"].oneOf(['lightBackground', 'darkBackground'])
};
var _default = Header;
exports["default"] = _default;