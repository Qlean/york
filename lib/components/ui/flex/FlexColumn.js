"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _styles = require("../../../utils/styles");

var _FlexBase = _interopRequireDefault(require("./FlexBase"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var columnWidth = 100 / _styles.GRID_COLUMNS;

var getBaseCss = function getBaseCss(columns) {
  return columns ? "width: ".concat(columns * columnWidth, "%;") : 'display: none;';
};

var StyledFlexColumn = _styledComponents["default"].div.withConfig({
  displayName: "FlexColumn__StyledFlexColumn",
  componentId: "sc-1n7xs0r-0"
})(["padding:0 ", "px;box-sizing:border-box;", ""], _styles.GRID_GUTTER / 2, function (_ref) {
  var columnsMobile = _ref.columnsMobile,
      columnsBase = _ref.columnsBase,
      columnsWide = _ref.columnsWide;
  return "\n    ".concat(_styles.media.mobile(getBaseCss(columnsMobile)), "\n    ").concat(_styles.media.base(getBaseCss(columnsBase)), "\n    ").concat(_styles.media.wide(getBaseCss(columnsWide)), "\n  ");
});

var FlexColumn = function FlexColumn(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react["default"].createElement(StyledFlexColumn, props, _react["default"].createElement(_FlexBase["default"], _extends({
    flexDirection: "column"
  }, props), children));
};

FlexColumn.propTypes = {
  children: _propTypes["default"].node
};

var _default = (0, _styles.withResponsiveProps)([{
  name: 'columns',
  propType: _propTypes["default"].oneOf(R.range(0, 13)),
  defaultValue: 12
}])(FlexColumn);

exports["default"] = _default;