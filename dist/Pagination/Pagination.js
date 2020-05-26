"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DELTA = 2;
var ELLIPSIS = '...';

var Pagination = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination, _React$Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getPaginationOptions = function () {
      var _this$props = _this.props,
          currentPage = _this$props.currentPage,
          totalPages = _this$props.totalPages;
      var left = currentPage <= 1 + DELTA * 2 ? 1 : currentPage - DELTA;
      var right = currentPage >= totalPages - DELTA * 2 ? totalPages : currentPage + DELTA + 1;
      var items = [];

      for (var i = 1; i <= totalPages; i += 1) {
        if (i === 1 || i === totalPages || i >= left && i < right) {
          items.push(i);
        } else if (items[items.length - 1] !== ELLIPSIS) {
          items.push(ELLIPSIS);
        }
      }

      return items;
    };

    _this.paginate = function (newPage) {
      var paginate = _this.props.paginate;
      paginate(newPage);
    };

    _this.renderPaginationItem = function (item, index) {
      var _this$props2 = _this.props,
          currentPage = _this$props2.currentPage,
          size = _this$props2.size;
      var paginationItem;

      if (item === ELLIPSIS) {
        paginationItem = /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
          size: size
        }, {
          variant: "minimal",
          mx: "smallest",
          key: "".concat(item, "-").concat(index),
          disabled: true
        }), item);
      } else {
        var variant = currentPage === item ? 'primary' : 'minimal';
        paginationItem = /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
          size: size,
          variant: variant
        }, {
          mx: "smallest",
          key: "".concat(item, "-").concat(index),
          onClick: function onClick() {
            return _this.paginate(item);
          }
        }), item);
      }

      return paginationItem;
    };

    _this.renderPreviousItem = function () {
      var _this$props3 = _this.props,
          currentPage = _this$props3.currentPage,
          previousText = _this$props3.previousText,
          size = _this$props3.size;
      var previousDisabled = currentPage === 1;
      return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
        size: size
      }, {
        variant: "minimal",
        mr: "small",
        key: "pagination-previous",
        disabled: previousDisabled,
        onClick: function onClick() {
          return _this.paginate(currentPage - 1);
        }
      }), previousText);
    };

    _this.renderNextItem = function () {
      var _this$props4 = _this.props,
          currentPage = _this$props4.currentPage,
          totalPages = _this$props4.totalPages,
          nextText = _this$props4.nextText,
          size = _this$props4.size;
      var nextDisabled = currentPage === totalPages;
      return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
        size: size
      }, {
        variant: "minimal",
        ml: "small",
        key: "pagination-next",
        disabled: nextDisabled,
        onClick: function onClick() {
          return _this.paginate(currentPage + 1);
        }
      }), nextText);
    };

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          currentPage = _this$props5.currentPage,
          totalPages = _this$props5.totalPages;

      if (!currentPage || !totalPages || totalPages <= 1) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, this.renderPreviousItem(), this.getPaginationOptions().map(this.renderPaginationItem), this.renderNextItem());
    }
  }]);

  return Pagination;
}(_react["default"].Component);

Pagination.propTypes = {
  /**
   * The current page that the user is on.
   */
  currentPage: _propTypes["default"].number,

  /**
   * Text to display in the 'Next' button
   */
  nextText: _propTypes["default"].string,

  /**
   * Callback to perform pagination
   */
  paginate: _propTypes["default"].func.isRequired,

  /**
   * Text to display in the 'Previous' button
   */
  previousText: _propTypes["default"].string,

  /**
   * Size variants for styling. See storybook for examples.
   */
  size: _propTypes["default"].oneOf(['small', 'medium']),

  /**
   * Total number of pages of content that exist.
   */
  totalPages: _propTypes["default"].number
};
Pagination.defaultProps = {
  currentPage: 0,
  nextText: 'next',
  previousText: 'previous',
  size: 'small',
  totalPages: 0
};
var _default = Pagination;
exports["default"] = _default;