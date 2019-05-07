"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _styles = require("../../../utils/styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: ", ";\n    align-items: ", ";\n    justify-content: ", ";\n    flex-wrap: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: ", ";\n    align-items: ", ";\n    justify-content: ", ";\n    flex-wrap: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: ", ";\n    align-items: ", ";\n    justify-content: ", ";\n    flex-wrap: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexBase = _styledComponents["default"].div.withConfig({
  displayName: "FlexBase",
  componentId: "o62hlr-0"
})(["display:flex;", " ", " ", ""], _styles.legacyMedia.mobile(_templateObject(), function (_ref) {
  var flexDirectionMobile = _ref.flexDirectionMobile;
  return flexDirectionMobile;
}, function (_ref2) {
  var alignItemsMobile = _ref2.alignItemsMobile;
  return alignItemsMobile;
}, function (_ref3) {
  var justifyContentMobile = _ref3.justifyContentMobile;
  return justifyContentMobile;
}, function (_ref4) {
  var flexWrapMobile = _ref4.flexWrapMobile;
  return flexWrapMobile;
}), _styles.legacyMedia.base(_templateObject2(), function (_ref5) {
  var flexDirectionBase = _ref5.flexDirectionBase;
  return flexDirectionBase;
}, function (_ref6) {
  var alignItemsBase = _ref6.alignItemsBase;
  return alignItemsBase;
}, function (_ref7) {
  var justifyContentBase = _ref7.justifyContentBase;
  return justifyContentBase;
}, function (_ref8) {
  var flexWrapBase = _ref8.flexWrapBase;
  return flexWrapBase;
}), _styles.legacyMedia.wide(_templateObject3(), function (_ref9) {
  var flexDirectionWide = _ref9.flexDirectionWide;
  return flexDirectionWide;
}, function (_ref10) {
  var alignItemsWide = _ref10.alignItemsWide;
  return alignItemsWide;
}, function (_ref11) {
  var justifyContentWide = _ref11.justifyContentWide;
  return justifyContentWide;
}, function (_ref12) {
  var flexWrapWide = _ref12.flexWrapWide;
  return flexWrapWide;
}));

var flexDirectionTypes = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column'
};
var alignItemsTypes = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  stretch: 'stretch'
};
var justifyContentTypes = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between'
};
var flexWrapTypes = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse'
};

var _default = (0, _styles.withResponsiveProps)([{
  name: 'flexDirection',
  propType: _propTypes["default"].oneOf(R.values(flexDirectionTypes))
}, {
  name: 'alignItems',
  propType: _propTypes["default"].oneOf(R.values(alignItemsTypes))
}, {
  name: 'justifyContent',
  propType: _propTypes["default"].oneOf(R.values(justifyContentTypes))
}, {
  name: 'flexWrap',
  propType: _propTypes["default"].oneOf(R.values(flexWrapTypes))
}])(FlexBase);

exports["default"] = _default;