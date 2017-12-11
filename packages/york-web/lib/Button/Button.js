'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 16px;\n  max-height: 100%;\n  height: 50px;\n  max-width: 320px;\n  width: 100%;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  border-radius: ', ';\n  background-image: ', ';\n'], ['\n  font-size: 16px;\n  max-height: 100%;\n  height: 50px;\n  max-width: 320px;\n  width: 100%;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  border-radius: ', ';\n  background-image: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n'], ['\n  display: block;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var backgroundImage = {
  yellow: 'linear-gradient(180deg, #FAE12E 0%, #FAC22E 100%)',
  blue: 'linear-gradient(180deg, #4298E6 0%, #1363AC 100%)'
};

var sharedPropTypes = {
  rounded: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['yellow', 'blue']),
  children: _propTypes2.default.node
};

var Button = _styledComponents2.default.button(_templateObject, function (_ref) {
  var rounded = _ref.rounded;
  return rounded ? '100px' : '0';
}, function (_ref2) {
  var color = _ref2.color;
  return backgroundImage[color];
});

Button.propTypes = sharedPropTypes;

var Link = Button.withComponent('a').extend(_templateObject2);

Link.propTypes = _extends({
  href: _propTypes2.default.string.isRequired
}, sharedPropTypes);

// eslint-disable-next-line react/prop-types

exports.default = function (_ref3) {
  var href = _ref3.href,
      children = _ref3.children,
      rest = _objectWithoutProperties(_ref3, ['href', 'children']);

  return href ? _react2.default.createElement(
    Link,
    _extends({ href: href }, rest),
    children
  ) : _react2.default.createElement(
    Button,
    rest,
    children
  );
};