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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFloatingMenu = _styledComponents["default"].nav.withConfig({
  displayName: "FloatingMenu__StyledFloatingMenu",
  componentId: "xxsc03-0"
})(["flex-direction:column;", " ", ""], _styles.media.desktop("\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background: ".concat(_yorkCore.colors.white, ";\n    border-radius: ").concat(_styles.borderRadiuses.medium, ";\n    box-shadow: ").concat(_styles.shadows.strong, ";\n    padding: ").concat((0, _styles.g)(4), "px ").concat((0, _styles.g)(2), "px;\n\n    /* visually-hidden */\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n  ")), _styles.media.mobile(_templateObject()));

var FloatingMenu = function FloatingMenu(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return _react["default"].createElement(StyledFloatingMenu, rest, children);
};

FloatingMenu.propTypes = {
  children: _propTypes["default"].node.isRequired
};
var _default = FloatingMenu;
exports["default"] = _default;