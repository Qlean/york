"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FlexContainer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../../../utils/styles");

var _FlexBase = _interopRequireDefault(require("./FlexBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", "px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", "px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    max-width: ", "px;\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlexContainer = _styledComponents["default"].div.withConfig({
  displayName: "FlexContainer__StyledFlexContainer",
  componentId: "sc-1rcwnti-0"
})(["box-sizing:border-box;margin:0 auto;width:100%;", " ", " ", ""], _styles.legacyMedia.mobile(_templateObject(), _styles.mediaMaxWidths.mobile, function (_ref) {
  var withoutMobilePadding = _ref.withoutMobilePadding;
  return !withoutMobilePadding && "\n      padding: 0 ".concat(_styles.MOBILE_PADDING, "px;\n    ");
}), _styles.legacyMedia.base(_templateObject2(), _styles.mediaMaxWidths.base), _styles.legacyMedia.wide(_templateObject3(), _styles.mediaMaxWidths.wide));

var StyledContent = _styledComponents["default"].div.withConfig({
  displayName: "FlexContainer__StyledContent",
  componentId: "sc-1rcwnti-1"
})(["margin:0 -", "px;box-sizing:border-box;", ";"], _styles.GRID_GUTTER / 2, function (_ref2) {
  var withFullHeightContent = _ref2.withFullHeightContent;
  return withFullHeightContent && 'height: 100%';
});

function FlexContainer(_ref3) {
  var withoutMobilePadding = _ref3.withoutMobilePadding,
      withFullHeightContent = _ref3.withFullHeightContent,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["withoutMobilePadding", "withFullHeightContent", "children"]);

  return _react["default"].createElement(StyledFlexContainer, {
    withoutMobilePadding: withoutMobilePadding
  }, _react["default"].createElement(StyledContent, {
    withFullHeightContent: withFullHeightContent
  }, _react["default"].createElement(_FlexBase["default"], props, children)));
}

FlexContainer.propTypes = {
  withoutMobilePadding: _propTypes["default"].bool,
  withFullHeightContent: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
FlexContainer.defaultProps = {
  withoutMobilePadding: false,
  withFullHeightContent: false
};