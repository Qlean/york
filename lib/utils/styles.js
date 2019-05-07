"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResponsivePropTypes = exports.mergeStyleProps = exports.unwrapResponsivePreset = exports.unwrapResponsiveProps = exports.getResponsiveProps = exports.withResponsiveProps = exports.legacyMedia = exports.media = exports.scrollToConfig = exports.headerHeight = exports.footerHeights = exports.mediaMaxWidths = exports.mediaBreakpoints = exports.borderRadiuses = exports.transitions = exports.shadows = exports.BUTTON_HOVER_STYLES = exports.MOBILE_PADDING = exports.GRID_GUTTER = exports.GRID_COLUMNS = exports.g = exports.UI_GRID_POINT = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _yorkCore = require("@qlean/york-core");

var R = _interopRequireWildcard(require("ramda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UI_GRID_POINT = 5;
exports.UI_GRID_POINT = UI_GRID_POINT;

var g = function g() {
  var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return times * UI_GRID_POINT;
};

exports.g = g;
var GRID_COLUMNS = 12;
exports.GRID_COLUMNS = GRID_COLUMNS;
var GRID_GUTTER = g(4);
exports.GRID_GUTTER = GRID_GUTTER;
var MOBILE_PADDING = g(6);
exports.MOBILE_PADDING = MOBILE_PADDING;
var BUTTON_HOVER_STYLES = {
  black: "background-color: ".concat(_yorkCore.colors.coal, "; color: ").concat(_yorkCore.colors.white, ";"),
  green: "filter: brightness(110%); color: ".concat(_yorkCore.colors.white, ";"),
  grayLinear: "border-color: ".concat(_yorkCore.colors.grey, "; color: ").concat(_yorkCore.colors.coal, ";"),
  greenLinear: "filter: brightness(130%) saturate(60%); color: ".concat(_yorkCore.colors.green, ";"),
  greenRound: "transform: translateY(-3px); box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10); color: ".concat(_yorkCore.colors.white, ";"),
  greenRoundLinear: "transform: translateY(-3px); box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10); color: ".concat(_yorkCore.colors.green, ";"),
  whiteRound: "transform: translateY(-3px); box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10); color: ".concat(_yorkCore.colors.coal, ";")
};
exports.BUTTON_HOVER_STYLES = BUTTON_HOVER_STYLES;
var shadows = {
  light: '0 1px 2px 0 rgba(0,0,0,0.10)',
  medium: '0 1px 2px rgba(0,0,0,0.25)',
  strong: '0 2px 6px 0 rgba(0,0,0,0.30)'
};
exports.shadows = shadows;
var transitions = {
  "short": 'all 0.1s ease-in-out',
  medium: 'all 0.25s ease-in-out',
  "long": 'all 0.4s ease-in-out'
};
exports.transitions = transitions;
var borderRadiuses = {
  small: '4px',
  medium: '6px',
  round: '100px',
  none: 'none'
};
exports.borderRadiuses = borderRadiuses;
var mediaBreakpoints = {
  base: 991,
  wide: 1280
};
exports.mediaBreakpoints = mediaBreakpoints;
var mediaMaxWidths = {
  base: 940,
  wide: 1120,
  mobile: 360
};
exports.mediaMaxWidths = mediaMaxWidths;
var footerHeights = {
  base: g(61),
  mobile: g(102)
};
exports.footerHeights = footerHeights;
var headerHeight = g(12);
exports.headerHeight = headerHeight;
var scrollToConfig = {
  duration: 750,
  smooth: true
};
exports.scrollToConfig = scrollToConfig;
var media = {
  mobile: function mobile(string) {
    return "\n    @media (max-width: ".concat(mediaBreakpoints.base, "px) {\n      ").concat(string, "\n    }\n  ");
  },
  base: function base(string) {
    return "\n    @media (min-width: ".concat(mediaBreakpoints.base + 1, "px) and (max-width: ").concat(mediaBreakpoints.wide - 1, "px) {\n      ").concat(string, "\n    }\n  ");
  },
  wide: function wide(string) {
    return "\n    @media (min-width: ".concat(mediaBreakpoints.wide, "px) {\n      ").concat(string, "\n    }\n  ");
  },
  desktop: function desktop(string) {
    return "\n    @media (min-width: ".concat(mediaBreakpoints.base + 1, "px) {\n      ").concat(string, "\n    }\n  ");
  }
};
exports.media = media;
var legacyMedia = {
  mobile: function mobile() {
    return (0, _styledComponents.css)(["@media (max-width:", "px){", "}"], mediaBreakpoints.base, _styledComponents.css.apply(void 0, arguments));
  },
  base: function base() {
    return (0, _styledComponents.css)(["@media (min-width:", "px) and (max-width:", "px){", "}"], mediaBreakpoints.base + 1, mediaBreakpoints.wide - 1, _styledComponents.css.apply(void 0, arguments));
  },
  wide: function wide() {
    return (0, _styledComponents.css)(["@media (min-width:", "px){", "}"], mediaBreakpoints.wide, _styledComponents.css.apply(void 0, arguments));
  }
};
exports.legacyMedia = legacyMedia;
var mediaTypes = ['Mobile', 'Base', 'Wide'];

var withResponsiveProps = function withResponsiveProps(responsivePropsNames) {
  return function (WrappedComponent) {
    var HigherOrderComponent =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(HigherOrderComponent, _PureComponent);

      function HigherOrderComponent() {
        _classCallCheck(this, HigherOrderComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(HigherOrderComponent).apply(this, arguments));
      }

      _createClass(HigherOrderComponent, [{
        key: "render",
        value: function render() {
          var _this = this;

          var responsiveProps = R.pipe(R.map(function (_ref) {
            var name = _ref.name,
                defaultValue = _ref.defaultValue;
            return R.map(function (mediaType) {
              var propName = "".concat(name).concat(mediaType);
              return [propName, _this.props[propName] || _this.props[name] || defaultValue];
            }, mediaTypes);
          }), R.reduce(R.concat, []), R.fromPairs)(responsivePropsNames);
          return _react["default"].createElement(WrappedComponent, _extends({}, responsiveProps, this.props));
        }
      }]);

      return HigherOrderComponent;
    }(_react.PureComponent);

    HigherOrderComponent.displayName = "WithResponsiveProps(".concat(WrappedComponent.name, ")");
    HigherOrderComponent.propTypes = R.pipe(R.map(function (_ref2) {
      var name = _ref2.name,
          propType = _ref2.propType;
      return R.pipe(R.map(function (mediaType) {
        return ["".concat(name).concat(mediaType), propType];
      }), R.append([name, propType]))(mediaTypes);
    }), R.reduce(R.concat, []), R.fromPairs)(responsivePropsNames);
    return HigherOrderComponent;
  };
};

exports.withResponsiveProps = withResponsiveProps;

var getResponsiveProps = function getResponsiveProps(propName, props) {
  return R.pick(R.map(function (mediaType) {
    return "".concat(propName).concat(mediaType);
  }, mediaTypes), props);
};

exports.getResponsiveProps = getResponsiveProps;
var mediaTypePropNames = ['mobileProps', 'baseProps', 'wideProps'];

var unwrapResponsiveProps = function unwrapResponsiveProps(propsNames, props) {
  var unwrappedProps = {};
  propsNames.forEach(function (propName) {
    mediaTypePropNames.forEach(function (mediaType) {
      var responsiveValue = R.path([mediaType, propName], props);
      var defaultValue = props[propName];
      var value = R.isNil(responsiveValue) ? defaultValue : responsiveValue;

      if (!R.isNil(value)) {
        unwrappedProps = R.assocPath([mediaType, propName], R.isNil(responsiveValue) ? defaultValue : responsiveValue, unwrappedProps);
      }
    });
  });
  return unwrappedProps;
};

exports.unwrapResponsiveProps = unwrapResponsiveProps;

var unwrapResponsivePreset = function unwrapResponsivePreset(presetKey, presets, props) {
  return R.pipe(R.map(function (mediaType) {
    var responsivePresetName = R.path([mediaType, presetKey], props);
    var defaultPresetName = props[presetKey];
    var presetName = R.isNil(responsivePresetName) ? defaultPresetName : responsivePresetName;

    if (!presetName) {
      // eslint-disable-next-line no-console
      console.warn("".concat(presetName, " preset name is not found in ").concat(JSON.stringify(presets)));
    }

    var preset = presets[presetName];

    if (!preset) {
      // eslint-disable-next-line no-console
      console.warn("".concat(presetName, " preset is not found in ").concat(JSON.stringify(presets)));
    }

    return [mediaType, preset || {}];
  }), R.fromPairs)(mediaTypePropNames);
};

exports.unwrapResponsivePreset = unwrapResponsivePreset;
var mergeStyleProps = R.reduce(R.mergeDeepWithKey(function (key, l, r) {
  return key === 'css' ? "".concat(l, "\n").concat(r) : r;
}), {});
exports.mergeStyleProps = mergeStyleProps;

var getResponsivePropTypes = function getResponsivePropTypes(propTypes) {
  return _objectSpread({}, propTypes, R.pipe(R.map(function (mediaType) {
    return [mediaType, _propTypes["default"].shape(propTypes)];
  }), R.fromPairs)(mediaTypePropNames));
};

exports.getResponsivePropTypes = getResponsivePropTypes;