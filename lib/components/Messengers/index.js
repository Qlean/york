"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Messengers;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes2 = require("../../utils/propTypes");

var _styles = require("../../utils/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FacebookIcon = function FacebookIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M10 0C4.477 0 0 4.145 0 9.26c0 2.913 1.454 5.512 3.727 7.21V20l3.405-1.869c.908.252 1.871.388 2.868.388 5.523 0 10-4.146 10-9.26S15.523 0 10 0zm.994 12.47L8.447 9.752 3.478 12.47l5.466-5.802 2.609 2.716 4.907-2.716-5.466 5.802z"
  }), _react["default"].createElement("path", {
    d: "M-2-2h24v24H-2z"
  })));
};

FacebookIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
};

var TelegramIcon = function TelegramIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    fill: "#FFFFFE",
    d: "M16.803 16.958s-.442 1.13-1.656.587l-7.285-5.717-2.649-1.31L.754 8.98s-.684-.248-.75-.79c-.067-.543.772-.837.772-.837L18.503.237s1.457-.655 1.457.43l-3.157 16.29z"
  }), _react["default"].createElement("path", {
    fill: "#E6E6E6",
    d: "M7.303 16.775s-.213-.02-.478-.88c-.265-.858-1.612-5.377-1.612-5.377l10.707-6.96s.618-.384.596 0c0 0 .11.068-.22.385-.332.316-8.411 7.75-8.411 7.75"
  }), _react["default"].createElement("path", {
    fill: "#CDCDCD",
    d: "M10.656 14.02l-2.882 2.69s-.225.174-.471.065l.551-4.995"
  }), _react["default"].createElement("path", {
    d: "M-1-4h24v24H-1z"
  })));
};

TelegramIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "18",
  viewBox: "0 0 20 18"
};

var ViberIcon = function ViberIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M10.688.068a8.522 8.522 0 0 1 2.825.834c.914.446 1.5.868 2.273 1.635.726.725 1.128 1.274 1.555 2.126.594 1.19.932 2.603.99 4.159.022.53.006.649-.116.8-.231.295-.74.246-.914-.084-.055-.11-.07-.203-.088-.628a10.961 10.961 0 0 0-.168-1.577c-.36-1.975-1.31-3.552-2.828-4.684-1.265-.946-2.572-1.407-4.285-1.507-.58-.033-.68-.055-.81-.155-.245-.19-.257-.64-.022-.849.143-.13.244-.149.74-.133.26.009.64.039.848.063zM3.72.396c.107.036.271.121.366.182.579.382 2.19 2.435 2.718 3.46.302.586.402 1.02.308 1.341-.098.346-.26.528-.981 1.107-.29.234-.561.474-.604.537-.11.158-.198.467-.198.686.003.506.332 1.425.765 2.132.335.549.936 1.253 1.53 1.793.698.637 1.313 1.07 2.008 1.413.893.443 1.439.555 1.838.37.1-.045.207-.106.24-.133.031-.028.266-.313.522-.628.494-.619.606-.719.945-.834.43-.146.868-.106 1.31.118a18.29 18.29 0 0 1 1.54.952c.62.434 1.95 1.514 2.13 1.73.316.388.371.885.158 1.434-.226.58-1.103 1.665-1.716 2.13-.555.418-.948.579-1.466.603-.426.021-.603-.015-1.149-.24-4.279-1.756-7.695-4.377-10.407-7.977C2.16 8.692 1.082 6.742.344 4.718c-.43-1.18-.45-1.692-.097-2.296.152-.255.801-.886 1.274-1.238C2.307.602 2.67.387 2.959.326c.198-.042.542-.01.762.07zm7.177 1.871c1.85.27 3.282 1.126 4.221 2.515.527.782.856 1.701.97 2.687.039.361.039 1.02-.004 1.128a.692.692 0 0 1-.277.3c-.12.061-.372.055-.512-.018-.235-.118-.305-.306-.305-.815 0-.786-.204-1.614-.558-2.257a4.62 4.62 0 0 0-1.7-1.762c-.613-.364-1.518-.634-2.344-.701-.299-.024-.463-.085-.576-.215a.55.55 0 0 1-.046-.686c.159-.246.403-.285 1.131-.176zm.65 2.29c.6.128 1.06.355 1.453.722.506.476.783 1.053.905 1.88.082.54.049.753-.143.929-.18.164-.512.17-.713.015-.147-.11-.192-.224-.226-.537-.04-.415-.113-.707-.238-.977-.268-.573-.74-.87-1.539-.967-.374-.046-.487-.088-.61-.23a.564.564 0 0 1 .172-.85c.115-.058.164-.064.42-.048.159.009.393.036.518.063z"
  }), _react["default"].createElement("path", {
    d: "M-2-3h24v24H-2z"
  })));
};

ViberIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "19",
  height: "19",
  viewBox: "0 0 19 19"
};

var VkIcon = function VkIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M11.253 12.945h1.375s.415-.045.627-.271c.196-.208.19-.598.19-.598s-.028-1.828.828-2.097c.845-.265 1.928 1.766 3.077 2.547.869.591 1.529.462 1.529.462l3.071-.043s1.607-.098.845-1.35c-.062-.102-.444-.925-2.284-2.617-1.926-1.771-1.668-1.485.652-4.548 1.413-1.866 1.978-3.005 1.801-3.493-.168-.465-1.207-.342-1.207-.342l-3.458.021s-.257-.034-.447.078c-.186.11-.305.368-.305.368s-.548 1.444-1.277 2.672c-1.54 2.59-2.156 2.727-2.408 2.566-.586-.375-.44-1.506-.44-2.31 0-2.51.385-3.557-.748-3.828-.376-.09-.653-.15-1.614-.16C9.826-.01 8.782.008 8.19.295c-.393.19-.697.616-.512.64.229.03.746.139 1.02.509.355.477.343 1.55.343 1.55s.204 2.956-.476 3.323c-.466.251-1.105-.263-2.478-2.613-.703-1.204-1.235-2.535-1.235-2.535S4.75.92 4.567.786a1.437 1.437 0 0 0-.53-.212L.75.595S.256.61.075.821c-.161.19-.013.58-.013.58s2.573 5.964 5.486 8.97c2.672 2.755 5.705 2.574 5.705 2.574"
  }), _react["default"].createElement("path", {
    d: "M0-6h24v24H0z"
  })));
};

VkIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "23",
  height: "13",
  viewBox: "0 0 23 13"
};
var messengerUtils = {
  facebook: {
    color: '#0084FF',
    icon: _react["default"].createElement(FacebookIcon, null)
  },
  vk: {
    color: '#5C81B3',
    icon: _react["default"].createElement(VkIcon, null)
  },
  telegram: {
    color: '#2CA5E0',
    icon: _react["default"].createElement(TelegramIcon, null)
  },
  viber: {
    color: '#7C529E',
    icon: _react["default"].createElement(ViberIcon, null)
  }
};

var StyledMessengers = _styledComponents["default"].div.withConfig({
  displayName: "Messengers__StyledMessengers",
  componentId: "sc-1x5cimm-0"
})(["width:100%;@media (max-width:1160px){text-align:left;}", " &.full-width{width:100%;max-width:100%;}"], function (_ref) {
  var withMobileFullWidth = _ref.withMobileFullWidth;
  return _styles.media.mobile("\n    min-width: ".concat(withMobileFullWidth ? '100%' : "".concat((0, _styles.g)(52), "px"), ";\n    width: ").concat(withMobileFullWidth ? '100%' : '80%', ";\n    max-width: ").concat((0, _styles.g)(60), "px;\n    margin: 0 auto;\n    text-align: center;\n  "));
});

var StyledMessenger = _styledComponents["default"].a.withConfig({
  displayName: "Messengers__StyledMessenger",
  componentId: "sc-1x5cimm-1"
})(["position:relative;display:inline-block;height:", "px;width:100%;vertical-align:middle;transition:background ease 0.3s;border-radius:", "px;padding-left:", "px;line-height:", "px;letter-spacing:0;text-align:center;text-decoration:none;font-size:16px;color:white;background-color:", ";&:not(:last-child){margin-bottom:", "px;}", " @media (min-width:1281px){height:", "px;line-height:", "px;}&:hover,&:focus{text-decoration:none;color:white;}& svg{background-repeat:no-repeat;background-position:center;position:absolute;top:50%;transform:translateY(-50%);content:'';left:", "px;top:50%;height:", "px;width:", "px;", "}&:hover{background-color:", ";}"], (0, _styles.g)(8), (0, _styles.g)(20), (0, _styles.g)(3), (0, _styles.g)(8), function (_ref2) {
  var messengerCode = _ref2.messengerCode;
  return messengerUtils[messengerCode].color;
}, (0, _styles.g)(2), _styles.media.mobile("\n    display: block;\n    width: auto;\n    height: ".concat((0, _styles.g)(10), "px;\n    line-height: ").concat((0, _styles.g)(10), "px;\n    margin: 0;\n    padding: 0;\n\n    &:not(:first-child) {\n      margin-top: ").concat((0, _styles.g)(2), "px;\n    }\n  ")), (0, _styles.g)(10), (0, _styles.g)(10), (0, _styles.g)(2), (0, _styles.g)(4), (0, _styles.g)(5), _styles.media.mobile("\n      height: ".concat((0, _styles.g)(6), "px;\n      width: ").concat((0, _styles.g)(6), "px;\n    ")), function (_ref3) {
  var messengerCode = _ref3.messengerCode;
  return "lighten(".concat(messengerUtils[messengerCode].color, ", 10%)");
});

function Messengers(_ref4) {
  var location = _ref4.location,
      messengers = _ref4.messengers,
      withMobileFullWidth = _ref4.withMobileFullWidth;
  return _react["default"].createElement(StyledMessengers, {
    withMobileFullWidth: withMobileFullWidth
  }, messengers.map(function (messenger) {
    return _react["default"].createElement(StyledMessenger, {
      name: "messengerButton.".concat(messenger.code),
      "data-url": location.pathname,
      "data-name": "footer-".concat(messenger.code),
      href: messenger.url,
      rel: "noopener noreferrer",
      target: "_blank",
      key: messenger.code,
      messengerCode: messenger.code
    }, messengerUtils[messenger.code].icon, messenger.name);
  }));
}

Messengers.defaultProps = {
  withMobileFullWidth: false
};
Messengers.propTypes = {
  withMobileFullWidth: _propTypes["default"].bool,
  location: _propTypes["default"].shape({
    pathname: _propTypes["default"].string.isRequired
  }).isRequired,
  messengers: _propTypes["default"].arrayOf(_propTypes["default"].shape(_propTypes2.messengersShape).isRequired).isRequired
};