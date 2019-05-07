"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.floatingFormRefNames = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _propTypes2 = require("../../utils/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var floatingFormRefNames = {
  topEdge: 'topEdge',
  bottomEdge: 'bottomEdge'
};
exports.floatingFormRefNames = floatingFormRefNames;

var FloatingFormScroller =
/*#__PURE__*/
function (_Component) {
  _inherits(FloatingFormScroller, _Component);

  function FloatingFormScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FloatingFormScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FloatingFormScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFloatingFormVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      var getRefHandler = _this.props.getRefHandler;
      var bottomOrderFormRef = getRefHandler(floatingFormRefNames.bottomEdge);
      var firstScreenRef = getRefHandler(floatingFormRefNames.topEdge);

      if (firstScreenRef && bottomOrderFormRef) {
        var firstScreenBottom = firstScreenRef.getBoundingClientRect().bottom;
        var topOrderFormTop = bottomOrderFormRef.getBoundingClientRect().top;
        var windowHeight = document.documentElement.clientHeight;
        var isFloatingFormVisible = topOrderFormTop > windowHeight && firstScreenBottom < 0;

        if (_this.state.isFloatingFormVisible !== isFloatingFormVisible) {
          _this.setState({
            isFloatingFormVisible: isFloatingFormVisible
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onThrottledScroll", (0, _lodash["default"])(_this.onScroll, 100));

    return _this;
  }

  _createClass(FloatingFormScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('scroll', this.onThrottledScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.onThrottledScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          creationFormProps = _this$props.creationFormProps,
          renderFloatingForm = _this$props.renderFloatingForm,
          children = _this$props.children;
      var isFloatingFormVisible = this.state.isFloatingFormVisible;
      return _react["default"].createElement("div", {
        ref: function ref(c) {
          _this2.container = c;
        }
      }, renderFloatingForm({
        isFloatingFormVisible: isFloatingFormVisible,
        creationFormProps: creationFormProps
      }), children);
    }
  }]);

  return FloatingFormScroller;
}(_react.Component);

_defineProperty(FloatingFormScroller, "propTypes", {
  getRefHandler: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired,
  creationFormProps: _propTypes["default"].shape(_propTypes2.creationFormPropsShape).isRequired,
  renderFloatingForm: _propTypes["default"].func.isRequired
});

var _default = FloatingFormScroller;
exports["default"] = _default;