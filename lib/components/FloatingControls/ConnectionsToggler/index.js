"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _yorkCore = require("@qlean/york-core");

var _styles = require("../../../utils/styles");

var _flex = require("../../ui/flex");

var _Connections = _interopRequireDefault(require("../Connections"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MessengersIcon = function MessengersIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.424 6.064a12.02 12.02 0 0 1 8.555-3.547c6.672 0 12.102 5.425 12.104 12.094.001 1.987-.482 3.93-1.405 5.668-.262.495-.355 1.068-.207 1.608l1.263 4.616-4.788-1.256c-.517-.136-1.063-.051-1.54.188-1.674.84-3.53 1.28-5.418 1.282h-.005c-6.669 0-12.097-5.426-12.1-12.096a12.02 12.02 0 0 1 3.54-8.557z",
    fill: "#20A052"
  }));
};

MessengersIcon.defaultProps = {
  width: "30",
  height: "30",
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var StyledIconWrapper = (0, _styledComponents["default"])(_flex.FlexBase).withConfig({
  displayName: "ConnectionsToggler__StyledIconWrapper",
  componentId: "sc-4zwyxi-0"
})(["box-shadow:", ";background-color:", ";box-shadow:", ";flex-shrink:0;border-radius:50%;width:", "px;height:", "px;cursor:pointer;", ""], _styles.shadows.medium, _yorkCore.colors.white, _styles.shadows.medium, (0, _styles.g)(10), (0, _styles.g)(10), function (_ref) {
  var _ref$togglerColor = _ref.togglerColor,
      togglerColor = _ref$togglerColor === void 0 ? '#20A052' : _ref$togglerColor,
      _ref$togglerColorHove = _ref.togglerColorHovered,
      togglerColorHovered = _ref$togglerColorHove === void 0 ? '#23B059' : _ref$togglerColorHove;
  return "\n    & path {\n      fill: ".concat(togglerColor, ";\n    }\n\n    &:hover {\n      & path {\n        fill: ").concat(togglerColorHovered, ";\n      }\n    }\n  ");
});

var ConnectionsToggler =
/*#__PURE__*/
function (_Component) {
  _inherits(ConnectionsToggler, _Component);

  function ConnectionsToggler() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConnectionsToggler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConnectionsToggler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isConnectionsVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleVisibility", function () {
      _this.setState({
        isConnectionsVisible: !_this.state.isConnectionsVisible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseVisibility", function () {
      _this.setState({
        isConnectionsVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onThrottledToggleVisibility", (0, _lodash["default"])(_this.onToggleVisibility, 500));

    return _this;
  }

  _createClass(ConnectionsToggler, [{
    key: "render",
    value: function render() {
      var isConnectionsVisible = this.state.isConnectionsVisible;
      var _this$props = this.props,
          extraConnections = _this$props.extraConnections,
          togglerColor = _this$props.togglerColor,
          togglerColorHovered = _this$props.togglerColorHovered;
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(StyledIconWrapper, {
        justifyContent: "center",
        alignItems: "center",
        name: "connectionsToggler",
        onClick: this.onThrottledToggleVisibility,
        togglerColor: togglerColor,
        togglerColorHovered: togglerColorHovered
      }, _react["default"].createElement(MessengersIcon, {
        width: 30,
        height: 30
      })), _react["default"].createElement(_Connections["default"], _extends({}, this.props, {
        onClose: this.onCloseVisibility,
        isVisible: isConnectionsVisible,
        extraConnections: extraConnections
      })));
    }
  }]);

  return ConnectionsToggler;
}(_react.Component);

_defineProperty(ConnectionsToggler, "propTypes", {
  extraConnections: _propTypes["default"].arrayOf(_propTypes["default"].func),
  togglerColor: _propTypes["default"].string,
  togglerColorHovered: _propTypes["default"].string
});

var _default = ConnectionsToggler;
exports["default"] = _default;