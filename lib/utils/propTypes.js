"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuItemsShape = exports.messengersShape = exports.creationFormPropsShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var creationFormPropsShape = {
  prefillPhoneNumber: _propTypes["default"].func.isRequired,
  values: _propTypes["default"].shape({
    contact_info: _propTypes["default"].shape({
      phone: _propTypes["default"].string
    })
  })
};
exports.creationFormPropsShape = creationFormPropsShape;
var messengersShape = {
  code: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string.isRequired,
  url: _propTypes["default"].string.isRequired
};
exports.messengersShape = messengersShape;
var menuItemsShape = {
  title: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    href: _propTypes["default"].string
  }).isRequired).isRequired,
  isMobileTitleHidden: _propTypes["default"].bool,
  isTooltip: _propTypes["default"].bool
};
exports.menuItemsShape = menuItemsShape;