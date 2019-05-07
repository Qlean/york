"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Connections;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _yorkCore = require("@qlean/york-core");

var _styles = require("../../../utils/styles");

var _propTypes2 = require("../../../utils/propTypes");

var _flex = require("../../ui/flex");

var _ui = require("../../ui");

var _Messengers = _interopRequireDefault(require("../../Messengers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    @media (max-width: 420px) {\n      ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CloseIcon = function CloseIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 25C0 11.193 11.193 0 25 0s25 11.193 25 25-11.193 25-25 25S0 38.807 0 25z",
    fill: "#fff"
  }), _react["default"].createElement("rect", {
    width: "25.037",
    height: "2.982",
    rx: "1.491",
    transform: "scale(1.00432 .99566) rotate(45 -9.663 28.107)",
    fill: "#000"
  }), _react["default"].createElement("rect", {
    width: "25.037",
    height: "2.982",
    rx: "1.491",
    transform: "scale(1.00342 .99657) rotate(-45 47.382 -1.681)",
    fill: "#000"
  }));
};

CloseIcon.defaultProps = {
  width: "50",
  height: "50",
  viewBox: "0 0 50 50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var StyledConnections = (0, _styledComponents["default"])(_flex.FlexBase).withConfig({
  displayName: "Connections__StyledConnections",
  componentId: "mr20qq-0"
})(["position:fixed;bottom:", ";right:", "px;width:", "px;opacity:", ";visibility:", ";background-color:", ";border-radius:25px;box-shadow:", ";transition:", ";@media (max-width:420px){width:100%;right:0;left:0;bottom:", ";border-bottom-left-radius:0;border-bottom-right-radius:0;}"], function (_ref) {
  var isVisible = _ref.isVisible;
  return isVisible ? "".concat((0, _styles.g)(18), "px") : "".concat((0, _styles.g)(8), "px");
}, (0, _styles.g)(4), (0, _styles.g)(64), function (_ref2) {
  var isVisible = _ref2.isVisible;
  return isVisible ? '1' : '0';
}, function (_ref3) {
  var isVisible = _ref3.isVisible;
  return isVisible ? 'visible' : 'hidden';
}, _yorkCore.colors.white, _styles.shadows.medium, _styles.transitions.medium, function (_ref4) {
  var isVisible = _ref4.isVisible;
  return isVisible ? '0' : "".concat(-(0, _styles.g)(8), "px");
});

var StyledOverlay = _styledComponents["default"].div.withConfig({
  displayName: "Connections__StyledOverlay",
  componentId: "mr20qq-1"
})(["@media (max-width:420px){position:fixed;right:0;left:0;top:0;bottom:0;background-color:", ";transition:", ";opacity:", ";visibility:", ";}"], _yorkCore.colors.black, _styles.transitions["long"], function (_ref5) {
  var isVisible = _ref5.isVisible;
  return isVisible ? '0.5' : '0';
}, function (_ref6) {
  var isVisible = _ref6.isVisible;
  return isVisible ? 'visible' : 'hidden';
});

var StyledConnectionsContent = _styledComponents["default"].div.withConfig({
  displayName: "Connections__StyledConnectionsContent",
  componentId: "mr20qq-2"
})(["flex-grow:1;"]);

var StyledCloseIcon = (0, _styledComponents["default"])(CloseIcon).withConfig({
  displayName: "Connections__StyledCloseIcon",
  componentId: "mr20qq-3"
})(["position:absolute;cursor:pointer;top:", "px;right:", "px;width:", "px;height:", "px;"], (0, _styles.g)(2), (0, _styles.g)(2), (0, _styles.g)(10), (0, _styles.g)(10));
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (_ref7) {
  var isVisible = _ref7.isVisible;
  return isVisible ? "\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      " : '';
});

function Connections(_ref8) {
  var isVisible = _ref8.isVisible,
      onClose = _ref8.onClose,
      location = _ref8.location,
      messengers = _ref8.messengers,
      connectionsTitle = _ref8.connectionsTitle,
      extraConnections = _ref8.extraConnections;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(StyledOverlay, {
    onClick: onClose,
    isVisible: isVisible
  }), _react["default"].createElement(StyledConnections, {
    isVisible: isVisible,
    name: "connections"
  }, _react["default"].createElement(_ui.Separator, {
    width: 6
  }), _react["default"].createElement(StyledConnectionsContent, null, _react["default"].createElement(_ui.Separator, {
    height: 6
  }), _react["default"].createElement(StyledCloseIcon, {
    onClick: onClose,
    name: "close"
  }), _react["default"].createElement(_ui.Text, {
    preset: "h4"
  }, connectionsTitle), _react["default"].createElement(_ui.Separator, {
    height: 4
  }), extraConnections && extraConnections.length > 0 && extraConnections.map(function (Connection) {
    return _react["default"].createElement(_react.Fragment, {
      key: Connection.name
    }, _react["default"].createElement(Connection, null), _react["default"].createElement(_ui.Separator, {
      height: 2
    }));
  }), messengers && _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_Messengers["default"], {
    location: location,
    messengers: messengers,
    withMobileFullWidth: true
  }), _react["default"].createElement(_ui.Separator, {
    height: 2
  })), _react["default"].createElement(_ui.Separator, {
    height: 4
  })), _react["default"].createElement(_ui.Separator, {
    width: 6
  })), _react["default"].createElement(GlobalStyle, {
    isVisible: isVisible
  }));
}

Connections.propTypes = {
  isVisible: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  location: _propTypes["default"].shape({
    pathname: _propTypes["default"].string.isRequired
  }).isRequired,
  messengers: _propTypes["default"].arrayOf(_propTypes["default"].shape(_propTypes2.messengersShape).isRequired),
  connectionsTitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,
  extraConnections: _propTypes["default"].arrayOf(_propTypes["default"].func)
};