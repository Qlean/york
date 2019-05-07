"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingControls;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../../utils/styles");

var _propTypes2 = require("../../utils/propTypes");

var _flex = require("../ui/flex");

var _ui = require("../ui");

var _Button = require("../ui/Button");

var _ConnectionsToggler = _interopRequireDefault(require("./ConnectionsToggler"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFloatingControlsWrapper = (0, _styledComponents["default"])(_flex.FlexBase).withConfig({
  displayName: "FloatingControls__StyledFloatingControlsWrapper",
  componentId: "sc-10u4uj2-0"
})(["z-index:10;position:fixed;right:", "px;bottom:", "px;@media (max-width:420px){right:", "px;left:", "px;}", ""], (0, _styles.g)(4), (0, _styles.g)(4), (0, _styles.g)(2), (0, _styles.g)(2), _styles.media.mobile("\n    bottom: ".concat((0, _styles.g)(2), "px;\n  ")));

var StyledButtonWrapper = _styledComponents["default"].div.withConfig({
  displayName: "FloatingControls__StyledButtonWrapper",
  componentId: "sc-10u4uj2-1"
})(["width:", "px;position:relative;bottom:", ";transition:", ";@media (max-width:420px){width:100%;bottom:", ";}"], (0, _styles.g)(48), function (_ref) {
  var isVisible = _ref.isVisible;
  return isVisible ? '0' : "".concat(-(0, _styles.g)(20), "px");
}, _styles.transitions.medium, function (_ref2) {
  var isVisible = _ref2.isVisible;
  return isVisible ? '0' : "".concat(-(0, _styles.g)(20), "px");
});

var StyledButton = (0, _styledComponents["default"])(_ui.Button).withConfig({
  displayName: "FloatingControls__StyledButton",
  componentId: "sc-10u4uj2-2"
})(["box-shadow:", ";"], _styles.shadows.medium);
var buttonHoverStyles = "\n  ".concat(_Button.presets.green.hoverProps.css, ";\n  transform: none;\n  box-shadow: none;\n");

function FloatingControls(_ref3) {
  var isVisible = _ref3.isVisible,
      _ref3$withConnections = _ref3.withConnections,
      withConnections = _ref3$withConnections === void 0 ? true : _ref3$withConnections,
      location = _ref3.location,
      onClick = _ref3.onClick,
      messengers = _ref3.messengers,
      buttonTitle = _ref3.buttonTitle,
      connectionsTitle = _ref3.connectionsTitle,
      extraConnections = _ref3.extraConnections,
      extraButtonCss = _ref3.extraButtonCss,
      togglerColor = _ref3.togglerColor,
      togglerColorHovered = _ref3.togglerColorHovered;
  return _react["default"].createElement(StyledFloatingControlsWrapper, null, _react["default"].createElement(StyledButtonWrapper, {
    isVisible: isVisible
  }, _react["default"].createElement(_StyledStyledButton, {
    name: "promocodeTimerButton",
    preset: extraButtonCss ? 'blank' : 'greenRound',
    isDisabled: false,
    onClick: onClick,
    hoverProps: {
      css: buttonHoverStyles
    },
    _css: extraButtonCss
  }, buttonTitle)), withConnections && _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_ui.Separator, {
    width: 2
  }), _react["default"].createElement(_ConnectionsToggler["default"], {
    location: location,
    messengers: messengers,
    connectionsTitle: connectionsTitle,
    extraConnections: extraConnections,
    togglerColor: togglerColor,
    togglerColorHovered: togglerColorHovered
  })));
}

FloatingControls.propTypes = {
  isVisible: _propTypes["default"].bool.isRequired,
  withConnections: _propTypes["default"].bool,
  onClick: _propTypes["default"].func.isRequired,
  location: _propTypes["default"].shape({
    pathname: _propTypes["default"].string.isRequired
  }).isRequired,
  messengers: _propTypes["default"].arrayOf(_propTypes["default"].shape(_propTypes2.messengersShape).isRequired).isRequired,
  buttonTitle: _propTypes["default"].string.isRequired,
  connectionsTitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,
  extraConnections: _propTypes["default"].arrayOf(_propTypes["default"].func),
  extraButtonCss: _propTypes["default"].string,
  togglerColor: _propTypes["default"].string,
  togglerColorHovered: _propTypes["default"].string
};

var _StyledStyledButton = (0, _styledComponents["default"])(StyledButton)(_templateObject(), function (p) {
  return p._css;
});