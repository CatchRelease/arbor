"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../Box"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _StyledTabs = _interopRequireDefault(require("./StyledTabs"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _constants = require("../constants");

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var getTabContentId = function getTabContentId(_ref) {
  var _ref$props = _ref.props,
      children = _ref$props.children,
      id = _ref$props.id;
  return children.props.id || "".concat(id, "-tab-content");
};

var Tabs = /*#__PURE__*/function (_React$Component) {
  _inherits(Tabs, _React$Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);

    _this.activateTab = function (tab) {
      _this.setState({
        activeTabId: tab.props.id
      });
    };

    _this.handleKeyPress = function (key, onClick) {
      if (key === _constants.ENTER_KEY || key === _constants.SPACEBAR) {
        onClick();
      }
    };

    _this.handleTabClick = function (tab, originalOnClick) {
      var callback = _this.isControlled ? function () {} : function () {
        return _this.activateTab(tab);
      };

      if (originalOnClick) {
        originalOnClick(callback);
      } else {
        callback();
      }
    };

    var _this$props = _this.props,
        activeTabId = _this$props.activeTabId,
        defaultTabId = _this$props.defaultTabId,
        children = _this$props.children;
    _this.state = activeTabId ? {} : {
      activeTabId: defaultTabId || children.find(function (tab) {
        return !!tab;
      }).props.id
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "activeTab",
    get: function get() {
      var activeTabId = this.activeTabId;
      var children = this.props.children;
      return children.find(function (tab) {
        if (!tab) {
          return false;
        }

        var id = tab.props.id;
        return id === activeTabId;
      });
    }
  }, {
    key: "activeTabId",
    get: function get() {
      var activeTabIdProp = this.props.activeTabId;
      var activeTabIdFromState = this.state.activeTabId;
      return activeTabIdProp || activeTabIdFromState;
    }
  }, {
    key: "activeTabContent",
    get: function get() {
      var activeTab = this.activeTab;
      return /*#__PURE__*/_react["default"].cloneElement(activeTab.props.children, {
        id: getTabContentId(activeTab)
      });
    }
  }, {
    key: "isControlled",
    get: function get() {
      var activeTabId = this.props.activeTabId;
      return !!activeTabId;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeTabId = this.activeTabId;

      var _this$props2 = this.props,
          children = _this$props2.children,
          tabBarAside = _this$props2.tabBarAside,
          props = _objectWithoutProperties(_this$props2, ["children", "tabBarAside"]);

      return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsxs)(_StyledTabs["default"], _objectSpread(_objectSpread({}, props), {}, {
          children: [(0, _jsxRuntime.jsx)(_Box["default"], {
            children: children.map(function (tab) {
              if (!tab) {
                return tab;
              }

              var _tab$props = tab.props,
                  id = _tab$props.id,
                  title = _tab$props.title,
                  originalOnClick = _tab$props.onClick;
              var active = activeTabId === id;
              var tabContentId = getTabContentId(tab);

              var onClick = function onClick() {
                return _this2.handleTabClick(tab, originalOnClick);
              };

              return /*#__PURE__*/_react["default"].cloneElement(tab, {
                'aria-controls': tabContentId,
                'aria-selected': active ? 'true' : 'false',
                active: active,
                key: id,
                onClick: onClick,
                onKeyPress: function onKeyPress(_ref2) {
                  var key = _ref2.key;
                  return _this2.handleKeyPress(key, onClick);
                }
              }, title);
            })
          }), tabBarAside && (0, _jsxRuntime.jsx)(_Flex["default"], {
            alignItems: "center",
            children: tabBarAside
          })]
        })), this.activeTabContent]
      });
    }
  }]);

  return Tabs;
}(_react["default"].Component);

Tabs.propTypes = {
  activeTabId: _propTypes["default"].string,
  defaultTabId: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_Tab["default"]), _propTypes["default"].objectOf(_Tab["default"])]).isRequired,
  tabBarAside: _propTypes["default"].node
};
Tabs.defaultProps = {
  activeTabId: undefined,
  defaultTabId: undefined,
  tabBarAside: undefined
};
var _default = Tabs;
exports["default"] = _default;