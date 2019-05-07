"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _styles = require("../../utils/styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: ", "px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: ", "px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: ", "px;\n    width: ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  0: 0,
  1: (0, _styles.g)(1),
  2: (0, _styles.g)(2),
  3: (0, _styles.g)(3),
  4: (0, _styles.g)(4),
  6: (0, _styles.g)(6),
  8: (0, _styles.g)(8),
  12: (0, _styles.g)(12),
  16: (0, _styles.g)(16),
  20: (0, _styles.g)(20),
  24: (0, _styles.g)(24)
};

var Separator = _styledComponents["default"].div.withConfig({
  displayName: "Separator",
  componentId: "sc-1472nu6-0"
})(["flex-shrink:0;", " ", " ", ""], function (_ref) {
  var height = _ref.heightMobile,
      width = _ref.widthMobile;
  return _styles.legacyMedia.mobile(_templateObject(), sizes[height], sizes[width]);
}, function (_ref2) {
  var height = _ref2.heightBase,
      width = _ref2.widthBase;
  return _styles.legacyMedia.base(_templateObject2(), sizes[height], sizes[width]);
}, function (_ref3) {
  var height = _ref3.heightWide,
      width = _ref3.widthWide;
  return _styles.legacyMedia.wide(_templateObject3(), sizes[height], sizes[width]);
});

var sizesPropTypes = _propTypes["default"].oneOf(R.map(Number, R.keys(sizes)));

var _default = (0, _styles.withResponsiveProps)([{
  name: 'height',
  propType: sizesPropTypes,
  defaultValue: 0
}, {
  name: 'width',
  propType: sizesPropTypes,
  defaultValue: 0
}])(Separator);

exports["default"] = _default;