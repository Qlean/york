"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _yorkCore = require("@qlean/york-core");

var _styles = require("../../../utils/styles");

var _propTypes2 = require("../../../utils/propTypes");

var _ui = require("../../ui");

var _flex = require("../../ui/flex");

var _FloatingMenu = _interopRequireDefault(require("./FloatingMenu"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  body {\n    ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFloatingMenu = (0, _styledComponents["default"])(_FloatingMenu["default"]).withConfig({
  displayName: "Menu__StyledFloatingMenu",
  componentId: "sc-1mqwwss-0"
})([""]);

var StyledMenuWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Menu__StyledMenuWrapper",
  componentId: "sc-1mqwwss-1"
})(["", ""], function (_ref) {
  var isMenuOpened = _ref.isMenuOpened;
  return "\n    ".concat(_styles.media.mobile("\n      height: 100%;\n      overflow: scroll;\n      position: fixed;\n      left: 0;\n      right: 0;\n      top: ".concat(isMenuOpened ? '0' : '-100%', ";\n      opacity: ").concat(isMenuOpened ? '1' : '0', ";\n      padding-top: ").concat((0, _styles.g)(12), "px;\n      transition: top .2s ease, opacity .4s ease;\n      background: ").concat(_yorkCore.colors.white, ";\n    ")), "\n  ");
});

var StyledMenu = (0, _styledComponents["default"])(_flex.FlexBase).withConfig({
  displayName: "Menu__StyledMenu",
  componentId: "sc-1mqwwss-2"
})(["height:100%;padding:0 ", "px;", " a,a:hover{text-decoration:none;}"], (0, _styles.g)(6), _styles.media.mobile("\n    max-width: ".concat((0, _styles.g)(72), "px;\n    margin: 0 auto;\n  ")));
var StyledCategoryTitle = (0, _styledComponents["default"])(_ui.Text).withConfig({
  displayName: "Menu__StyledCategoryTitle",
  componentId: "sc-1mqwwss-3"
})(["display:none;padding-top:", "px;padding-bottom:", "px;", ";"], (0, _styles.g)(6), (0, _styles.g)(2), _styles.media.mobile(_templateObject()));

var StyledButtonContainer = _styledComponents["default"].div.withConfig({
  displayName: "Menu__StyledButtonContainer",
  componentId: "sc-1mqwwss-4"
})(["position:relative;", " &:hover > ", "{clip:auto;width:auto;height:auto;margin:0;}"], _styles.media.desktop("\n    height: 100%;\n    display: flex;\n    align-items: center;\n  "), StyledFloatingMenu);

var StyledHoverButton = (0, _styledComponents["default"])(_MenuItem["default"]).withConfig({
  displayName: "Menu__StyledHoverButton",
  componentId: "sc-1mqwwss-5"
})(["", ";"], _styles.media.mobile(_templateObject2()));
var StyledFloatingLink = (0, _styledComponents["default"])(_MenuItem["default"]).withConfig({
  displayName: "Menu__StyledFloatingLink",
  componentId: "sc-1mqwwss-6"
})(["", ""], _styles.media.desktop("\n    color: ".concat(_yorkCore.colors.coal, ";\n    padding-right: ").concat((0, _styles.g)(6), "px;\n    &:hover {\n      border-radius: ").concat(_styles.borderRadiuses.small, ";\n      background: ").concat(_yorkCore.colors.smoke, ";\n      color: ").concat(_yorkCore.colors.coal, ";\n    }\n  ")));
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject3(), function (_ref2) {
  var isMenuOpened = _ref2.isMenuOpened;
  return isMenuOpened ? "\n      ".concat(_styles.media.mobile(_templateObject4()), "\n    ") : '';
});

var Menu = function Menu(_ref3) {
  var toggleMenu = _ref3.toggleMenu,
      isMenuOpened = _ref3.isMenuOpened,
      menuItems = _ref3.menuItems,
      preset = _ref3.preset;
  return _react["default"].createElement(StyledMenuWrapper, {
    isMenuOpened: isMenuOpened
  }, _react["default"].createElement(StyledMenu, {
    alignItems: "center",
    alignItemsMobile: "flex-start",
    flexDirectionMobile: "column"
  }, menuItems.map(function (category) {
    return _react["default"].createElement(_react.Fragment, {
      key: category.title
    }, category.isMobileTitleHidden || _react["default"].createElement(StyledCategoryTitle, {
      preset: "h5",
      color: "grey"
    }, category.title), category.isTooltip ? _react["default"].createElement(StyledButtonContainer, {
      name: category.name
    }, _react["default"].createElement(StyledHoverButton, {
      color: _utils.presets[preset].link,
      hoverColor: _utils.presets[preset].linkHover
    }, category.title), _react["default"].createElement(StyledFloatingMenu, null, category.items.map(function (link) {
      return _react["default"].createElement(StyledFloatingLink, {
        LinkComponent: link.LinkComponent,
        key: link.title,
        href: link.href,
        name: link.name,
        onClick: link.onClick,
        isAuthButton: link.isAuthButton // color={presets[preset].link}
        // hoverColor={presets[preset].linkHover}
        ,
        color: _utils.presets[preset].menuItem,
        hoverColor: _utils.presets[preset].menuItemHover,
        toggleMenu: toggleMenu
      }, link.title);
    }))) : category.items.map(function (link) {
      return _react["default"].createElement(_MenuItem["default"], {
        key: link.title,
        href: link.href,
        name: link.name,
        onClick: link.onClick,
        isAuthButton: link.isAuthButton,
        LinkComponent: link.LinkComponent // color={presets[preset].link}
        // hoverColor={presets[preset].linkHover}
        ,
        color: _utils.presets[preset].menuItem,
        hoverColor: _utils.presets[preset].menuItemHover,
        toggleMenu: toggleMenu
      }, link.title);
    }), _react["default"].createElement(_ui.Separator, {
      width: 1
    }));
  })), _react["default"].createElement(GlobalStyle, {
    isMenuOpened: isMenuOpened
  }));
};

Menu.propTypes = {
  isMenuOpened: _propTypes["default"].bool.isRequired,
  toggleMenu: _propTypes["default"].func.isRequired,
  menuItems: _propTypes["default"].arrayOf(_propTypes["default"].shape(_propTypes2.menuItemsShape).isRequired).isRequired,
  preset: _propTypes["default"].oneOf(Object.keys(_utils.presets))
};
var _default = Menu;
exports["default"] = _default;