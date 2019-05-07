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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Logo = function Logo(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("g", {
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    d: "M16.118 2.474C13.682.83 10.962.514 8.142 1.02 4.401 1.695 2.054 3.98.985 7.571c-.91 3.059-.906 6.167-.282 9.275.39 1.93 1.178 3.685 2.571 5.122 1.673 1.72 3.775 2.477 6.116 2.665.262.022.405.11.535.33a11.379 11.379 0 0 0 3.598 3.717c1.161.754 2.397 1.308 3.824 1.28.804-.021 1.412-.514 1.529-1.219.133-.806-.289-1.52-1.069-1.796-.226-.081-.463-.134-.691-.204-1.42-.44-2.514-1.277-3.238-2.619.083-.043.129-.075.178-.088 2.555-.894 4.29-2.655 5.225-5.148 1.363-3.631 1.363-7.348.42-11.069-.55-2.184-1.67-4.05-3.583-5.343zm-.238 14.822c-.565 1.861-1.681 3.305-3.644 3.844-2.07.569-4.054.396-5.751-1.063-1.094-.935-1.665-2.196-1.937-3.566-.244-1.24-.46-3.77-.427-3.777.034-1.822.188-3.621.939-5.323 1.155-2.6 3.442-3.496 5.955-3.266 2.761.254 4.322 1.915 4.992 4.451.763 2.895.75 5.823-.127 8.7zM64.64 21.771c-.905-.425-1.469-1.102-1.582-2.106a10.432 10.432 0 0 1-.058-1.12c-.017-2.434.003-4.869-.043-7.3-.042-2.129-1.22-3.625-3.266-4.255-1.55-.478-3.141-.503-4.734-.353-1.221.114-2.425.33-3.503.94-.417.234-.84.563-1.097.957-.61.928-.01 2.083 1.056 2.106.27.006.554-.081.819-.168.547-.168 1.077-.402 1.63-.55 1.387-.368 2.793-.545 4.21-.195.665.164 1.233.54 1.334 1.234.14.928.144 1.873.202 2.78-.514 0-.914.007-1.313 0-1.952-.03-3.885.087-5.738.788-1.249.471-2.311 1.195-2.947 2.404-1.56 2.954-.167 6.312 3.063 7.307 2.945.906 5.656.418 8.05-1.456.506.396.984.831 1.519 1.169.717.454 1.51.683 2.376.542.815-.136 1.263-.814 1.088-1.613-.13-.595-.569-.88-1.067-1.11zm-5.107-1.227c-1.496 1.131-3.184 1.479-5.01 1.093-1.22-.255-1.8-.97-1.914-2.192-.108-1.176.417-2.09 1.495-2.584 1.007-.461 2.087-.56 3.175-.587.61-.015 1.23.035 1.844.027.351-.006.467.133.44.482-.03.383-.007.772-.007 1.158-.013.004.086 1.521.132 2.282a.438.438 0 0 1-.155.32zM44.666 8.125c-1.508-1.28-3.295-1.671-5.217-1.536-3.121.218-5.327 1.775-6.466 4.678-1.072 2.73-1.051 5.546-.227 8.334.617 2.074 1.95 3.595 4 4.368.853.32 1.777.522 2.686.623 2.09.24 4.123-.057 6.02-1 .418-.206.798-.544 1.105-.898.398-.461.363-1.154.02-1.64-.346-.486-.908-.68-1.53-.499-.294.086-.58.206-.86.332-1.45.653-2.945.93-4.542.72-2.28-.294-4.003-2.374-3.834-4.727h8.882c.35 0 .699.008 1.049-.006.842-.03 1.312-.405 1.421-1.23.157-1.207-.012-2.402-.28-3.578-.347-1.529-1.003-2.905-2.227-3.941zm-8.855 6.054c.143-1.463.472-2.81 1.57-3.854 1.346-1.274 3.937-1.33 5.184-.09.78.774 1.04 1.78 1.201 2.82.055.366.073.735.112 1.124H35.81zM82.362 10.784c-.324-1.789-1.22-3.189-3.017-3.777-2.295-.744-4.583-.67-6.74.497-.785.424-1.463 1.049-2.199 1.584-.018-.047-.052-.175-.121-.283-.348-.549-.638-1.151-1.074-1.622-.476-.514-1.137-.545-1.792-.28-.587.243-.96.696-.953 1.31.005.462.153.952.351 1.373.634 1.329.917 2.719.905 4.187-.018 2.862-.005 5.723-.005 8.586v.402c.042 1.195.953 1.912 2.124 1.665.92-.19 1.35-.791 1.35-1.928 0-3.4-.013-6.797 0-10.193a1.2 1.2 0 0 1 .265-.709c1.143-1.351 2.616-2.035 4.39-2.098 1.89-.066 3.032.966 3.156 2.858.012.228.024.457.024.681v9.51c0 .707.165 1.33.838 1.698 1.26.689 2.669-.133 2.669-1.558.002-3.317.012-6.63-.006-9.95-.004-.65-.05-1.31-.165-1.953M30.332 21.352a4.715 4.715 0 0 0-.956.068c-1.221.194-1.984-.32-2.203-1.524a5.43 5.43 0 0 1-.08-.957c-.009-2.767-.005-5.533-.005-8.299V9.592c0-2.55.001-5.105-.001-7.66-.003-.914-.36-1.494-1.064-1.753-1.266-.471-2.402.301-2.402 1.642-.002 5.761-.004 11.524.002 17.288.003.503.023 1.018.1 1.513.224 1.472.827 2.712 2.245 3.395 1.15.554 2.37.625 3.61.42.604-.102 1.175-.29 1.604-.758.401-.44.449-.96.268-1.499-.175-.52-.57-.802-1.118-.828"
  })));
};

Logo.defaultProps = {
  width: "83",
  height: "30",
  viewBox: "0 0 83 30",
  xmlns: "http://www.w3.org/2000/svg"
};
var StyledLogo = (0, _styledComponents["default"])(function (_ref) {
  var colorMobile = _ref.colorMobile,
      rest = _objectWithoutProperties(_ref, ["colorMobile"]);

  return _react["default"].createElement(Logo, rest);
}).withConfig({
  displayName: "HeaderLogo__StyledLogo",
  componentId: "sc-1b2cy9v-0"
})(["", ""], function (_ref2) {
  var color = _ref2.color,
      colorMobile = _ref2.colorMobile;
  return "\n    fill: ".concat(_yorkCore.colors[color] || _yorkCore.colors.green, ";\n    ").concat(_styles.media.mobile("\n      fill: ".concat(_yorkCore.colors[colorMobile] || _yorkCore.colors.green, ";\n    ")), "\n  ");
});

var HeaderLogo = function HeaderLogo(_ref3) {
  var color = _ref3.color,
      colorMobile = _ref3.colorMobile,
      rest = _objectWithoutProperties(_ref3, ["color", "colorMobile"]);

  return _react["default"].createElement("a", {
    href: "/?noredirect=true",
    name: "logo"
  }, _react["default"].createElement(StyledLogo, _extends({
    color: color,
    colorMobile: colorMobile,
    width: 83,
    height: 30
  }, rest)));
};

HeaderLogo.propTypes = {
  color: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)).isRequired,
  colorMobile: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)).isRequired
};
var _default = HeaderLogo;
exports["default"] = _default;