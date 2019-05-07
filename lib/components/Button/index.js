"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.presets = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _yorkCore = require("@qlean/york-core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = require("../Text");

var _styles = require("../../utils/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var presets = {
  blank: {},
  black: {
    borderRadius: 'small',
    backgroundColor: 'black',
    color: 'white',
    hoverProps: {
      css: _styles.BUTTON_HOVER_STYLES.black
    },
    disabledProps: {
      backgroundColor: 'grey'
    }
  },
  green: {
    borderRadius: 'small',
    backgroundColor: 'green',
    color: 'white',
    hoverProps: {
      css: "\n        background-color: #23B059;\n        border-color: #23B059;\n      "
    },
    disabledProps: {
      css: "\n        background-color: #8AD4A6;\n        border-color: #8AD4A6;\n      "
    }
  },
  grayLinear: {
    borderColor: 'silver',
    borderRadius: 'small',
    backgroundColor: 'white',
    color: 'coal',
    hoverProps: {
      css: _styles.BUTTON_HOVER_STYLES.grayLinear
    },
    disabledProps: {
      color: 'grey',
      css: 'border-color: #efefef;'
    }
  },
  greenLinear: {
    borderColor: 'green',
    borderRadius: 'small',
    color: 'green',
    hoverProps: {
      css: "\n        border-color: #5FC083;\n        color: #5FC083;\n      "
    },
    disabledProps: {
      css: "\n        border-color: #A2DDB8;\n        color: #A2DDB8;\n      "
    }
  },
  greenRound: {
    borderRadius: 'round',
    backgroundColor: 'green',
    color: 'white',
    hoverProps: {
      css: _styles.BUTTON_HOVER_STYLES.greenRound
    }
  },
  greenRoundLinear: {
    borderColor: 'green',
    borderRadius: 'round',
    color: 'green',
    hoverProps: {
      css: "\n        transform: translateY(-3px);\n        box-shadow: 0 10px 10px 0 rgba(0,59,23,0.10);\n        color: ".concat(_yorkCore.colors.green, ";\n      ")
    },
    disabledProps: {
      css: "\n        border-color: #A2DDB8;\n        color: #A2DDB8;\n      "
    }
  },
  whiteRound: {
    borderRadius: 'round',
    backgroundColor: 'white',
    color: 'coal',
    hoverProps: {
      css: _styles.BUTTON_HOVER_STYLES.whiteRound
    }
  }
};
exports.presets = presets;

var getHeight = function getHeight(size) {
  switch (size) {
    case 's':
      return "".concat((0, _styles.g)(8), "px");

    case 'm':
      return "".concat((0, _styles.g)(10), "px");

    case 'l':
      return "".concat((0, _styles.g)(12), "px");

    default:
      return '';
  }
};

var getBaseCss = function getBaseCss(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      borderColor = _ref.borderColor,
      borderRadius = _ref.borderRadius,
      width = _ref.width,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      css = _ref.css;
  return "\n  color: ".concat(_yorkCore.colors[color], ";\n  background-color: ").concat(_yorkCore.colors[backgroundColor] || 'transparent', ";\n  ").concat(borderRadius ? "border-radius: ".concat(_styles.borderRadiuses[borderRadius]) : '', ";\n  ").concat(borderColor || backgroundColor ? "border: 1px solid ".concat(_yorkCore.colors[borderColor || backgroundColor]) : 'border: 1px solid', ";\n  width: ").concat(width, ";\n  font-size: ").concat(fontSize, "px;\n  font-weight: ").concat(fontWeight, ";\n\n  ").concat(css || '', ";\n");
};

var getCss = function getCss(_ref2) {
  var hoverProps = _ref2.hoverProps,
      disabledProps = _ref2.disabledProps,
      isDisabled = _ref2.isDisabled,
      rest = _objectWithoutProperties(_ref2, ["hoverProps", "disabledProps", "isDisabled"]);

  return "\n  ".concat(getBaseCss(isDisabled ? _objectSpread({}, rest, disabledProps) : rest), "\n  &:hover {\n    ").concat(isDisabled ? '' : getBaseCss(_objectSpread({}, rest, hoverProps)), "\n  }\n");
};

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-16vcbcx-0"
})(["font-family:'Museo Sans';transition:", ";padding:0;appearance:none !important;outline:none !important;box-sizing:border-box;padding:0 ", "px;line-height:", "px;height:", ";cursor:", ";", ""], _styles.transitions["short"], (0, _styles.g)(2), (0, _styles.g)(4), function (_ref3) {
  var size = _ref3.size;
  return getHeight(size);
}, function (_ref4) {
  var isDisabled = _ref4.isDisabled;
  return isDisabled ? 'default' : 'pointer';
}, function (_ref5) {
  var mobileProps = _ref5.mobileProps,
      baseProps = _ref5.baseProps,
      wideProps = _ref5.wideProps,
      rest = _objectWithoutProperties(_ref5, ["mobileProps", "baseProps", "wideProps"]);

  return "\n    ".concat(_styles.media.mobile("\n      height: ".concat((0, _styles.g)(10), "px;\n      ").concat(getCss(_objectSpread({}, mobileProps, rest)), "\n    ")), "\n    ").concat(_styles.media.base(getCss(_objectSpread({}, baseProps, rest))), "\n    ").concat(_styles.media.wide(getCss(_objectSpread({}, wideProps, rest))), "\n  ");
});

var StyledFlex = _styledComponents["default"].div.withConfig({
  displayName: "Button__StyledFlex",
  componentId: "sc-16vcbcx-1"
})(["display:flex;align-items:center;justify-content:center;height:100%;"]);
/**
 * Компонент кнопки.
 */


function Button(_ref6) {
  var size = _ref6.size,
      type = _ref6.type,
      isDisabled = _ref6.isDisabled,
      isFetching = _ref6.isFetching,
      onClick = _ref6.onClick,
      className = _ref6.className,
      children = _ref6.children,
      name = _ref6.name,
      rest = _objectWithoutProperties(_ref6, ["size", "type", "isDisabled", "isFetching", "onClick", "className", "children", "name"]);

  return _react["default"].createElement(StyledButton, _extends({}, (0, _styles.mergeStyleProps)([(0, _styles.unwrapResponsivePreset)('preset', presets, rest), (0, _styles.unwrapResponsivePreset)('textPreset', _Text.presets, rest), (0, _styles.unwrapResponsiveProps)(['color', 'backgroundColor', 'borderColor', 'borderRadius', 'width', 'fontSize', 'fontWeight', 'css', 'hoverProps', 'disabledProps'], rest)]), {
    size: size,
    type: type,
    disabled: isDisabled || isFetching,
    isDisabled: isDisabled || isFetching,
    className: className,
    onClick: !isDisabled && !isFetching ? onClick : null,
    name: name
  }), _react["default"].createElement(StyledFlex, null, isFetching ? 'Загрузка' : children));
}

Button.propTypes = _objectSpread({}, (0, _styles.getResponsivePropTypes)({
  /** Управление preset самой кнопки. */
  preset: _propTypes["default"].oneOf(Object.keys(presets)),

  /** Управление preset шрифта кнопки. */
  textPreset: _propTypes["default"].oneOf(Object.keys(_Text.presets)),

  /** Управление цветом шрифта кнопки. */
  color: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)),

  /** Управление цветом background кнопки. */
  backgroundColor: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)),

  /** Управление цветом border кнопки. */
  borderColor: _propTypes["default"].oneOf(Object.keys(_yorkCore.colors)),

  /** Управление скруглением кнопки. */
  borderRadius: _propTypes["default"].oneOf(Object.keys(_styles.borderRadiuses)),

  /** Управление шириной кнопки. */
  width: _propTypes["default"].string,

  /** Управление размером шрифта кнопки. */
  fontSize: _propTypes["default"].number,

  /** Управление жирнотой шрифта кнопки. */
  fontWeight: _propTypes["default"].oneOf([500, 700, 900]),

  /** Управление дополнительными стилями кнопки. */
  css: _propTypes["default"].string
}), {
  /** Размер кнопки */
  size: _propTypes["default"].oneOf(['s', 'm', 'l']),

  /** Тип кнопки */
  type: _propTypes["default"].oneOf(['button', 'reset', 'submit']),

  /** Управление возможности взаимодействия с компонентом */
  isDisabled: _propTypes["default"].bool.isRequired,

  /** Управление возможности взаимодействия с компонентом в состоянии загрузки */
  isFetching: _propTypes["default"].bool,

  /** Дополнительный класс */
  className: _propTypes["default"].string,

  /** Имя кнопки в DOM */
  name: _propTypes["default"].string.isRequired,

  /** Обработчик клика по кнопке */
  onClick: _propTypes["default"].func.isRequired,

  /** Дочерние элементы кнопки */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,

  /** Свойства при hover кнопки */
  hoverProps: _propTypes["default"].obj,

  /** Свойства при disabled кнопки */
  disabledProps: _propTypes["default"].obj
});
Button.defaultProps = {
  isFetching: false,
  preset: 'black',
  textPreset: 'text2',
  width: '100%',
  size: 'm',
  type: 'button',
  hoverProps: {},
  disabledProps: {}
};
var _default = Button;
exports["default"] = _default;