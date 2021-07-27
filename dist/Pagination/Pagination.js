"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var react_2 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Button_1 = __importDefault(require("../Button"));
var DELTA = 2;
var ELLIPSIS = '...';
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPaginationOptions = function () {
            var _a = _this.props, currentPage = _a.currentPage, totalPages = _a.totalPages;
            var left = currentPage <= 1 + DELTA * 2 ? 1 : currentPage - DELTA;
            var right = currentPage >= totalPages - DELTA * 2
                ? totalPages
                : currentPage + DELTA + 1;
            var items = [];
            for (var i = 1; i <= totalPages; i += 1) {
                if (i === 1 || i === totalPages || (i >= left && i < right)) {
                    items.push(i);
                }
                else if (items[items.length - 1] !== ELLIPSIS) {
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
            var _a = _this.props, currentPage = _a.currentPage, size = _a.size;
            var paginationItem;
            if (item === ELLIPSIS) {
                paginationItem = (react_1.createElement(Button_1["default"], __assign({}, { size: size }, { variant: "minimal", mx: "smallest", key: item + "-" + index, disabled: true }), item));
            }
            else {
                var variant = currentPage === item ? 'primary' : 'minimal';
                paginationItem = (react_1.createElement(Button_1["default"], __assign({}, { size: size, variant: variant }, { mx: "smallest", key: item + "-" + index, onClick: function () { return _this.paginate(item); } }), item));
            }
            return paginationItem;
        };
        _this.renderPreviousItem = function () {
            var _a = _this.props, currentPage = _a.currentPage, previousText = _a.previousText, size = _a.size;
            var previousDisabled = currentPage === 1;
            return (react_1.createElement(Button_1["default"], __assign({}, { size: size }, { variant: "minimal", mr: "small", key: "pagination-previous", disabled: previousDisabled, onClick: function () { return _this.paginate(currentPage - 1); } }), previousText));
        };
        _this.renderNextItem = function () {
            var _a = _this.props, currentPage = _a.currentPage, totalPages = _a.totalPages, nextText = _a.nextText, size = _a.size;
            var nextDisabled = currentPage === totalPages;
            return (react_1.createElement(Button_1["default"], __assign({}, { size: size }, { variant: "minimal", ml: "small", key: "pagination-next", disabled: nextDisabled, onClick: function () { return _this.paginate(currentPage + 1); } }), nextText));
        };
        return _this;
    }
    Pagination.prototype.render = function () {
        var _a = this.props, currentPage = _a.currentPage, totalPages = _a.totalPages;
        if (!currentPage || !totalPages || totalPages <= 1) {
            return null;
        }
        return (jsx_runtime_1.jsxs("div", { children: [this.renderPreviousItem(), this.getPaginationOptions().map(this.renderPaginationItem), this.renderNextItem()] }, void 0));
    };
    return Pagination;
}(react_2.Component));
Pagination.propTypes = {
    /**
     * The current page that the user is on.
     */
    currentPage: prop_types_1["default"].number,
    /**
     * Text to display in the 'Next' button
     */
    nextText: prop_types_1["default"].string,
    /**
     * Callback to perform pagination
     */
    paginate: prop_types_1["default"].func.isRequired,
    /**
     * Text to display in the 'Previous' button
     */
    previousText: prop_types_1["default"].string,
    /**
     * Size variants for styling. See storybook for examples.
     */
    size: prop_types_1["default"].oneOf(['small', 'medium']),
    /**
     * Total number of pages of content that exist.
     */
    totalPages: prop_types_1["default"].number
};
Pagination.defaultProps = {
    currentPage: 0,
    nextText: 'next',
    previousText: 'previous',
    size: 'small',
    totalPages: 0
};
exports["default"] = Pagination;
